import React from "react";
import { IoIosAlert } from "react-icons/io";

interface SigninProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  error: string | null;
  setError: (value: string | null) => void;
  phone: string;
  setPhone: (value: string) => void;
  country: string;
  setCountry: (value: string) => void;
  name: string;
  setName: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  rePassword: string;
  setRePassword: (value: string) => void;
}

const CreateAcountComponent: React.FC<SigninProps> = ({
  handleSubmit,
  error,
  setError,
  phone,
  setPhone,
  country,
  setCountry,
  name,
  setName,
  password,
  setPassword,
  rePassword,
  setRePassword,
}) => {
  return (
    <div className="my-5 p-5 border border-gray-300 rounded-md w-[25%]">
      <h3 className="text-3xl font-semibold mb-2 tracking-wide">
        Create Account
      </h3>
      <form action="" className="" onSubmit={handleSubmit}>
        <div className="max-w-sm mx-auto mt-4">
          <label className="block text-sm font-bold text-gray-700 mb-1">
            Mobile number
          </label>
          <div className="flex items-center gap-x-2">
            <div className="flex items-center bg-gray-100 px-3 py-1 rounded-lg border border-gray-300  shadow-sm">
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="outline-none bg-transparent text-sm font-medium text-gray-700 appearance-none pr-6 "
              >
                <option value="EG +2">+20</option>
                <option value="US">US</option>
                <option value="SA">SA</option>
              </select>
              <svg
                className="w-4 h-4 ml-[-1.5rem] text-gray-500 pointer-events-none ps-1"
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
            </div>
            <input
              type="tel"
              value={phone}
              onChange={(e) => {
                setError("");
                setPhone(e.target.value);
              }}
              placeholder="Mobile Number"
              //   className="ml-4 flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm "
              className={`flex items-center w-full border-gray-300 shadow-sm rounded-md px-3 py-1 ${
                error ? "border-2 border-red-600" : "border-1 border-gray-500"
              }`}
            />
            {phone?.length > 0 ? (
              <button onClick={() => setPhone("")} className="font-bold">
                X
              </button>
            ) : (
              ""
            )}
          </div>
          {error ? (
            <span className="text-red-700">
              <IoIosAlert className="inline-block me-1 text-xl " />
              {error}
            </span>
          ) : (
            ""
          )}
        </div>
        <div className="max-w-sm mx-auto mt-4">
          <label className="block text-sm font-bold text-gray-700 mb-1">
            Your Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setError("");
              setName(e.target.value);
            }}
            placeholder="First and last name"
            className={`flex outline-none w-full items-center text-gray-700 placeholder-gray-400 border-gray-300 rounded-md px-3 py-1  shadow-sm ${
              error ? "border-2 border-red-600" : "border-1 border-gray-500"
            }`}
          />
        </div>
        <div className="max-w-sm mx-auto mt-4">
          <label className="block text-sm font-bold text-gray-700 mb-1">
            Password (at least 6 characters)
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setError("");
              setPassword(e.target.value);
            }}
            className={`flex outline-none w-full items-center text-gray-700 placeholder-gray-400 border-gray-300 rounded-md px-3 py-1 shadow-sm ${
              error ? "border-2 border-red-600" : "border-1 border-gray-500"
            }`}
          />
        </div>
        <div className="max-w-sm mx-auto mt-4">
          <label className="block text-sm font-bold text-gray-700 mb-1">
            Re-enter password
          </label>
          <input
            type="password"
            value={rePassword}
            onChange={(e) => {
              setError("");
              setRePassword(e.target.value);
            }}
            className={`flex outline-none w-full items-center text-gray-700 placeholder-gray-400 border-gray-300 rounded-md px-3 py-1 shadow-sm ${
              error ? "border-2 border-red-600" : "border-1 border-gray-500"
            }`}
          />
        </div>
        <p className="text-sm my-4">
          To verify your number, we will send you a text message with a
          temporary code. Message and data rates may apply.
        </p>
        <input
          type="submit"
          value="Verify mobile number"
          className="bg-amber-300 w-full my-3 py-2 text-sm rounded-2xl"
        />
        <div className="">
          <p className="font-bold">Already a customer?</p>
          <button className=" text-blue-500 hover:underline hover:text-blue-600 font-semibold">
            Sign in instead
          </button>
        </div>
        <p className="text-sm mt-6">
          By continuing, you agree to Awfar's{" "}
          <a href="" className="text-blue-700 hover:text-blue-900 underline">
            Conditions of Use
          </a>{" "}
          and{" "}
          <a href="" className="underline text-blue-700 hover:text-blue-900">
            Privacy Notice.
          </a>
        </p>
      </form>
    </div>
  );
};

export default CreateAcountComponent;
