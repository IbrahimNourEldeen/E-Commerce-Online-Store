import { useState } from "react";
import icon from "../assets/icon.png";
import { IoIosAlert } from "react-icons/io";

const users = [
  {
    name: "ibrahim nour eldeen",
    number: "01011843602",
    password: "*******",
  },
];

const Login = () => {
  const [country, setCountry] = useState("+20");
  const [phone, setPhone] = useState("");
  const [formNumber, setFormNumber] = useState(1);

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formNumber == 1) {
      if (!phone) {
        setError("Phone number is required");
      } else if(phone.length!=11){
        setError("invalid number")
      }else{
        const user = users.find(u=>u.number==phone)
        if(!user){
          setFormNumber(2)
        }
      }
    }
  };
  return (
    <div className="h-screen">
      <div className="h-[60%] flex items-center flex-col">
        <div className="">
          <img src={icon} alt="" className="w-[200px]" />
        </div>
        <div className="mt-5 p-5 border border-gray-300 rounded-md w-[25%]">
          <h3 className="text-lg font-semibold mb-2 tracking-wide">
            Sign in or create an account
          </h3>
          <form action="" className="" onSubmit={handleSubmit}>
            <div className="max-w-sm mx-auto">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone number
              </label>
              <div className={`flex items-center border-gray-300 rounded-md px-3 py-2 ${error?"border-2 border-red-600":"border"}`}>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="outline-none bg-transparent text-sm font-medium text-gray-700 appearance-none pr-6"
                >
                  <option value="EG">+20</option>
                  <option value="US">US</option>
                  <option value="SA">SA</option>
                </select>
                <svg
                  className="w-4 h-4 ml-[-1.5rem] text-gray-500 pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => {setError(""); setPhone(e.target.value)}}
                  placeholder="Mobile Number"
                  className="ml-4 flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm "
                />
                {
                  phone?.length>0? <button onClick={()=>setPhone("")} className="font-bold">X</button>:""
                }
              </div>
              {error ? <span className="text-red-700"><IoIosAlert className="inline-block me-1 text-xl " />{error}</span> : ""}
            </div>
            <input
              type="submit"
              value="Continue"
              className="bg-amber-300 w-full my-3 py-2 text-sm rounded-2xl"
            />
            <div className="text-sm">
              <p className="">
                By continuing, you agree to Awfar's{" "}
                <a
                  href=""
                  className="text-blue-700 hover:text-blue-900 underline"
                >
                  Conditions of Use
                </a>{" "}
                and{" "}
                <a
                  href=""
                  className="underline text-blue-700 hover:text-blue-900"
                >
                  Privacy Notice.
                </a>
              </p>
              <button className=" my-2 text-blue-700 hover:underline hover:text-blue-900 font-semibold">
                Need help?
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="h-40% border-t-2 border-gray-300 text-sm p-5">
        <ul className="flex justify-center gap-x-3 text-blue-800">
          <li className="">
            <a href="" className="">
              Conditions of Use
            </a>
          </li>
          <li className="">
            <a href="" className="">
              Privacy Notice
            </a>
          </li>
          <li className="">
            <a href="" className="">
              Help
            </a>
          </li>
        </ul>
        <p className="text-center mt-2 text-gray-700">
          © 1996–2025, awfar shop, Inc.
        </p>
      </div>
    </div>
  );
};

export default Login;
