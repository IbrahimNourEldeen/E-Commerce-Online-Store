import { useState } from "react";
import icon from "../assets/icon.png";
import Signin from "../components/registration/Signin";
import NewComponent from "../components/registration/NewComponent";
import CreateAcountComponent from "../components/registration/CreateAcountComponent";

const users = [
  {
    name: "ibrahim nour eldeen",
    number: "01011843602",
    password: "*******",
  },
];

const Login = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rePassword, setRePassword] = useState<string>("");
  const [formNumber, setFormNumber] = useState<number>(3);
  const [country, setCountry] = useState<string>("EG +2");
  const [phone, setPhone] = useState("");
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
    <div className="min-h-[100vh]">
      <div className="min-h-[60%] flex items-center flex-col">
        <div className="">
          <img src={icon} alt="" className="w-[200px]" />
        </div>
        {
          formNumber==1?(
            <Signin handleSubmit ={handleSubmit} error={error} setError={setError} phone={phone} setPhone= {setPhone} country = {country} setCountry = {setCountry}/>
          ):formNumber==2?(
            <NewComponent country = {country} phone={phone} setFormNumber={setFormNumber}/>
          ):formNumber==3?(
            <CreateAcountComponent handleSubmit ={handleSubmit} error={error} setError={setError} phone={phone} setPhone= {setPhone} country = {country} setCountry = {setCountry} name={name} setName={setName} password={password} setPassword={setPassword} rePassword={rePassword} setRePassword={setRePassword}/>
          ):""

        }
      </div>

      <div className="max-h-40% border-t-2 border-gray-300 text-sm p-5">
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
