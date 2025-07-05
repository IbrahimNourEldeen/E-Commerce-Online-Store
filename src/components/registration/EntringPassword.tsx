import { useEffect, useState } from "react";
import { IoIosAlert } from "react-icons/io";
import { useDispatch } from "react-redux";
import { LoginUser } from "../../features/users/userSlice";
import { useNavigate } from "react-router-dom";

interface NewProps {
  phone: string;
  country: string;
  password: string;
  setPassword: (value: string) => void;
  setFormNumber: (value: number) => void;
}

const EntringPassword: React.FC<NewProps> = ({
  country,
  phone,
  password,
  setPassword,
  setFormNumber,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [users, setUsers] = useState("");

  useEffect(() => {
    fetch("/public/users.json")
    .then(response=> response.json())
    .then(data=> setUsers(data))
    .catch(err=>console.log(err))
  }, []);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = users?.find((u) => u.number === phone);
    if (!user) {
      setError("User not found");
      return;
    }

    if (user.password === password) {
      dispatch(
        LoginUser({
          name: user.name,
          phone: user.number,
          password: user.password,
        })
      );
      navigate("/", { replace: true });
    } else {
      setError("Incorrect password");
    }
  };

  return (
    <div className="mt-5 p-5 border border-gray-300 rounded-md w-[25%]">
      <h3 className="text-lg font-semibold mb-2 tracking-wide">Sign in</h3>
      <form onSubmit={handleSubmit}>
        <div className="max-w-sm mx-auto">
          <div>
            <span>
              {country} {phone}
            </span>
            <button
              className="text-blue-600 hover:text-blue-800 cursor-pointer ms-2"
              onClick={() => setFormNumber(1)}
            >
              Change
            </button>
          </div>
        </div>
        <div className="max-w-sm mx-auto">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <div
            className={`flex items-center border-gray-300 rounded-md px-3 py-2 ${
              error ? "border-2 border-red-600" : "border"
            }`}
          >
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setError(null);
                setPassword(e.target.value);
              }}
              className="ml-4 flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm"
            />
            {password.length > 0 && (
              <button
                type="button"
                onClick={() => setPassword("")}
                className="font-bold"
              >
                X
              </button>
            )}
          </div>
          {error && (
            <span className="text-red-700 text-sm mt-1 block">
              <IoIosAlert className="inline-block me-1 text-xl" />
              {error}
            </span>
          )}
        </div>
        <input
          type="submit"
          value="Continue"
          className="bg-amber-300 w-full my-3 py-2 text-sm rounded-2xl"
        />
        <div className="text-sm">
          <p>
            By continuing, you agree to Awfar's{" "}
            <a href="#" className="text-blue-700 hover:underline">
              Conditions of Use
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-700 hover:underline">
              Privacy Notice.
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default EntringPassword;
