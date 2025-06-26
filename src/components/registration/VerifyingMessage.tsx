const VerifyingMessage = () => {
  const handleSubmit = () => {
    // setFormNumber(3);
  };
  return (
    <div className="mt-5 p-5 border border-gray-300 rounded-md w-[25%]">
      <h3 className="text-lg font-semibold mb-2 tracking-wide">
        Looks like you're new to Awfar Shop
      </h3>
      <form action="" className="" onSubmit={handleSubmit}>
        <div className="max-w-sm mx-auto">
          <div className="">
          </div>
          <p className="">Let's create an acount using your mobile number</p>
        </div>
        <input
          type="submit"
          value="Proceed to create an acount"
          className="bg-amber-300 w-full my-3 py-2 text-sm rounded-2xl cursor-pointer"
        />
        <div className="text-sm">
          <p className=" font-semibold">Already a customer?</p>
          <button
            className=" my-2 text-blue-500 hover:underline hover:text-blue-800 font-semibold"
            // onClick={() => setFormNumber(1)}
          >
            Sign in with another mobile
          </button>
        </div>
      </form>
    </div>
  );
};

export default VerifyingMessage;
