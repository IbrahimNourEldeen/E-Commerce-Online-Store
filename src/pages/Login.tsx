import { useEffect, useState } from "react";
import icon from "../assets/icon.png";
import Signin from "../components/registration/Signin";
import NewComponent from "../components/registration/NewComponent";
import CreateAcountComponent from "../components/registration/CreateAcountComponent";
import VerifyingMessage from "../components/registration/VerifyingMessage";
import { LoginUser } from "../features/users/userSlice";
import { useDispatch } from "react-redux";
import EntringPassword from "../components/registration/EntringPassword";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [users, setUsers] = useState("")
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rePassword, setRePassword] = useState<string>("");
  const [formNumber, setFormNumber] = useState<number>(1);
  const [country, setCountry] = useState<string>("EG +2");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);

  const [errorCreation, setErrorCreation] = useState({
    phone: null,
    name: null,
    password: null,
    rePassword: null,
  });

  const [confirmed, setConfirm] = useState({
    phone: false,
    name: false,
    password: false,
    rePassword: false,
  });

  useEffect(()=>{
    fetch("/users.json")
    .then(response=>response.json())
    .then(data=>setUsers(data))
    .catch(error=>console.log(error))
  },[])  
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formNumber === 1) {
      if (!phone) {
        setError("Phone number is required");
        return;
      }
      if (phone.length !== 11) {
        setError("Invalid number");
        return;
      }

      const user = users?.find((u) => u.number === phone);

      if (!user) {
        setFormNumber(2); 
        return;
      }

      if (!password) {
        setFormNumber(10);
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
    } else if (formNumber === 3) {
      const newErrors = {
        phone: null,
        name: null,
        password: null,
        rePassword: null,
      };

      const newConfirmed = {
        phone: false,
        name: false,
        password: false,
        rePassword: false,
      };

      if (!phone) newErrors.phone = "Phone number is required";
      else if (phone.length !== 11) newErrors.phone = "Invalid number";
      else newConfirmed.phone = true;

      if (!name) newErrors.name = "Name is required";
      else if (name.length < 5) newErrors.name = "Invalid name";
      else newConfirmed.name = true;

      if (!password) newErrors.password = "Password is required";
      else if (password.length < 5) newErrors.password = "Invalid password";
      else newConfirmed.password = true;

      if (!rePassword) newErrors.rePassword = "Confirm password";
      else if (password !== rePassword)
        newErrors.rePassword = "Passwords do not match";
      else newConfirmed.rePassword = true;

      setErrorCreation(newErrors);
      setConfirm(newConfirmed);

      const allValid = Object.values(newConfirmed).every(Boolean);
      if (allValid) {
        setFormNumber(4);
      }
    }
  };

  return (
    <div className="min-h-[100vh]">
      <div className="min-h-[60%] flex items-center flex-col">
        <div>
          <img src={icon} alt="" className="w-[200px]" />
        </div>

        {formNumber === 1 && (
          <Signin
            handleSubmit={handleSubmit}
            error={error}
            setError={setError}
            phone={phone}
            setPhone={setPhone}
            country={country}
            setCountry={setCountry}
          />
        )}

        {formNumber === 2 && (
          <NewComponent
            country={country}
            phone={phone}
            setFormNumber={setFormNumber}
          />
        )}

        {formNumber === 3 && (
          <CreateAcountComponent
            handleSubmit={handleSubmit}
            errorCreation={errorCreation}
            setErrorCreation={setErrorCreation}
            phone={phone}
            setPhone={setPhone}
            country={country}
            setCountry={setCountry}
            name={name}
            setName={setName}
            password={password}
            setPassword={setPassword}
            rePassword={rePassword}
            setRePassword={setRePassword}
          />
        )}

        {formNumber === 4 && (
          <VerifyingMessage
            setFormNumber={setFormNumber}
            phone={phone}
            country={country}
            setLogedIn={(val) => {
              if (val) {
                dispatch(LoginUser({ name, phone, password }));
                navigate("/", { replace: true });
              }
            }}
          />
        )}

        {formNumber === 10 && (
          <EntringPassword
            phone={phone}
            country={country}
            setPassword={setPassword}
            setFormNumber={setFormNumber}
            password={password}
          />
        )}
      </div>

      <div className="max-h-40% border-t-2 border-gray-300 text-sm p-5 mt-10">
        <ul className="flex justify-center gap-x-3 text-blue-800">
          <li>
            <a href="">Conditions of Use</a>
          </li>
          <li>
            <a href="">Privacy Notice</a>
          </li>
          <li>
            <a href="">Help</a>
          </li>
        </ul>
        <p className="text-center mt-2 text-gray-700">
          © 1996–2025, Awfar Shop, Inc.
        </p>
      </div>
    </div>
  );
};

export default Login;
