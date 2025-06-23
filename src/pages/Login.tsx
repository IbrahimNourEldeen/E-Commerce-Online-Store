import icon from "../assets/icon.png";
const Login = () => {
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
          <form action="" className="">
            <div className="flex flex-col gap-y-1">
              <label htmlFor="lb1" className="font-semibold">
                Enter mobile number or email
              </label>
              <input
                type="text"
                id="lb1"
                className=" w-full border border-gray-400 rounded py-1 shadow focus:outline-blue-300 px-2"
              />
            </div>
            <input type="submit" value="Continue" className="bg-amber-300 w-full my-3 py-2 text-sm rounded-2xl"/>
            <div className="text-sm">
                <p className="">By continuing, you agree to Awfar's <a href="" className="text-blue-700 hover:text-blue-900 underline">Conditions of Use</a> and <a href="" className="underline text-blue-700 hover:text-blue-900">Privacy Notice.</a></p>
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
