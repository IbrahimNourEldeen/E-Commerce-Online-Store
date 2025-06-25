import { IoIosAlert } from "react-icons/io";

import React from "react";

interface SigninProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  error: string | null;
  setError: (value: string | null) => void;
  phone: string;
  setPhone: (value: string) => void;
  country: string;
  setCountry: (value: string) => void;
}

const Signin: React.FC<SigninProps> = ({handleSubmit, error, setError, phone, setPhone, country, setCountry}) => {

  return (
    <div className="mt-5 p-5 border border-gray-300 rounded-md w-[25%]">
      <h3 className="text-lg font-semibold mb-2 tracking-wide">
        Sign in or create an account
      </h3>
      <form action="" className="" onSubmit={handleSubmit}>
        <div className="max-w-sm mx-auto">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone number
          </label>
          <div
            className={`flex items-center border-gray-300 rounded-md px-3 py-2 ${
              error ? "border-2 border-red-600" : "border"
            }`}
          >
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="outline-none bg-transparent text-sm font-medium text-gray-700 appearance-none pr-6"
            >
              <option value="EG +2">+20</option>
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
              onChange={(e) => {
                setError("");
                setPhone(e.target.value);
              }}
              placeholder="Mobile Number"
              className="ml-4 flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm "
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
        <input
          type="submit"
          value="Continue"
          className="bg-amber-300 w-full my-3 py-2 text-sm rounded-2xl"
        />
        <div className="text-sm">
          <p className="">
            By continuing, you agree to Awfar's{" "}
            <a href="" className="text-blue-700 hover:text-blue-900 underline">
              Conditions of Use
            </a>{" "}
            and{" "}
            <a href="" className="underline text-blue-700 hover:text-blue-900">
              Privacy Notice.
            </a>
          </p>
          <button className=" my-2 text-blue-700 hover:underline hover:text-blue-900 font-semibold">
            Need help?
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
