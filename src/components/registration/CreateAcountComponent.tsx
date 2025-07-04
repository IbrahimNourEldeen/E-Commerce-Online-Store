import React from "react";
import { IoIosAlert } from "react-icons/io";

interface SigninProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  errorCreation: {
    phone: string | null;
    name: string | null;
    password: string | null;
    rePassword: string | null;
  };
  setErrorCreation: (value: {
    phone: string | null;
    name: string | null;
    password: string | null;
    rePassword: string | null;
  }) => void;
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
  errorCreation,
  setErrorCreation,
}) => {
  return (
    <div className="my-5 p-5 border border-gray-300 rounded-md w-full max-w-md mx-auto">
      <h3 className="text-3xl font-semibold mb-4 tracking-wide text-center">
        Create Account
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          {/* Phone */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              Mobile number
            </label>
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-gray-100 px-3 py-1 rounded-lg border border-gray-300 shadow-sm">
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
                  setErrorCreation({ ...errorCreation, phone: null });
                  setPhone(e.target.value);
                }}
                placeholder="Mobile Number"
                className={`flex-1 border rounded-md px-3 py-1 shadow-sm outline-none ${
                  errorCreation.phone ? "border-red-600" : "border-gray-300"
                }`}
              />
            </div>
            {errorCreation.phone && (
              <span className="text-red-700 text-sm mt-1 block">
                <IoIosAlert className="inline-block mr-1 text-xl align-middle" />
                {errorCreation.phone}
              </span>
            )}
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setErrorCreation({ ...errorCreation, name: null });
                setName(e.target.value);
              }}
              placeholder="First and last name"
              className={`w-full border rounded-md px-3 py-1 shadow-sm outline-none ${
                errorCreation.name ? "border-red-600" : "border-gray-300"
              }`}
            />
            {errorCreation.name && (
              <span className="text-red-700 text-sm mt-1 block">
                <IoIosAlert className="inline-block mr-1 text-xl align-middle" />
                {errorCreation.name}
              </span>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              Password (at least 6 characters)
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setErrorCreation({ ...errorCreation, password: null });
                setPassword(e.target.value);
              }}
              className={`w-full border rounded-md px-3 py-1 shadow-sm outline-none ${
                errorCreation.password ? "border-red-600" : "border-gray-300"
              }`}
            />
            {errorCreation.password && (
              <span className="text-red-700 text-sm mt-1 block">
                <IoIosAlert className="inline-block mr-1 text-xl align-middle" />
                {errorCreation.password}
              </span>
            )}
          </div>

          {/* Re-enter Password */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              Re-enter password
            </label>
            <input
              type="password"
              value={rePassword}
              onChange={(e) => {
                setErrorCreation({ ...errorCreation, rePassword: null });
                setRePassword(e.target.value);
              }}
              className={`w-full border rounded-md px-3 py-1 shadow-sm outline-none ${
                errorCreation.rePassword ? "border-red-600" : "border-gray-300"
              }`}
            />
            {errorCreation.rePassword && (
              <span className="text-red-700 text-sm mt-1 block">
                <IoIosAlert className="inline-block mr-1 text-xl align-middle" />
                {errorCreation.rePassword}
              </span>
            )}
          </div>

          {/* Info */}
          <p className="text-sm text-gray-600">
            To verify your number, we will send you a text message with a
            temporary code. Message and data rates may apply.
          </p>

          <input
            type="submit"
            value="Verify mobile number"
            className="bg-amber-300 w-full mt-3 py-2 text-sm rounded-2xl cursor-pointer"
          />

          {/* Already a customer */}
          <div className="text-sm text-center mt-4">
            <p className="font-bold">Already a customer?</p>
            <button
              type="button"
              className="text-blue-500 hover:underline hover:text-blue-600 font-semibold"
            >
              Sign in instead
            </button>
          </div>

          <p className="text-sm text-gray-600 mt-6 text-center">
            By continuing, you agree to Awfar's
            <a
              href="#"
              className="text-blue-700 hover:text-blue-900 underline mx-1"
            >
              Conditions of Use
            </a>
            and
            <a
              href="#"
              className="underline text-blue-700 hover:text-blue-900 mx-1"
            >
              Privacy Notice
            </a>
            .
          </p>
        </div>
      </form>
    </div>
  );
};

export default CreateAcountComponent;
