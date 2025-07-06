import { Link } from "react-router-dom";
import poster from "../assets/icon.png";
import { FaOpencart } from "react-icons/fa";

const Checkout = () => {
  return (
    <div className="relative">
      <nav className="bg-blue-50  shadow">
        <div className="flex justify-between items-center lg:w-[90%] lg:mx-auto py-2">
          <div className="">
            <Link to={"/"}>
              <img src={poster} className="w-[150px]" />
            </Link>
          </div>
          <div className="text-2xl font-semibold">Secure checkout</div>
          <div className="relative">
            <button className="text-2xl translate-1 text-orange-600 bg-orange-100 p-2 rounded-full">
              <Link to="/cart">
                {" "}
                <FaOpencart />
              </Link>{" "}
            </button>
            <span className="absolute right-1 text-white bg-orange-600 rounded-full px-1 text-xs">
              {/* {cartLength} */}
            </span>
          </div>
        </div>
      </nav>
      <section className="grid grid-cols-3 bg-gray-100 p-3">
        <div className="col-span-2">
          <div className="bg-white p-5 rounded mb-5">
            <h3 className=" mb-5 font-semibold text-xl">
              Add delivery address
            </h3>
            <button className="bg-yellow-400 px-4 py-2 rounded-3xl text-sm">
              Add a new delivery address
            </button>
          </div>
          <div className="bg-white p-5 rounded mb-5">
            <h3 className=" mb-5 font-semibold text-xl">Payment method</h3>
          </div>
          <div className="bg-white p-5 rounded mb-5">
            <h3 className=" mb-5 font-semibold text-xl">
              Review items and shipping
            </h3>
          </div>
          <div className="bg-white p-5 rounded mb-5 text-sm">
            Do you need help? Explore our Help pages or contact us.<br/> If there is
            a problem charging your selected payment method we may charge any
            other valid payment method associated with your account. You can
            manage your options by visiting your payments page. <br/>For an item sold
            by Amazon.eg: When you click the "Place your order" button, we'll
            send you an email message acknowledging receipt of your order. Your
            contract to purchase an item will not be complete until we send you
            an email notifying you that the item has been shipped. <br/>Within 15
            days of delivery, you may return new, unopened merchandise in its
            original condition. Exceptions and restrictions apply. See
            amazon.eg's Returns Policy.(Note:ID Verification is mandatory to
            return an item and get a refund) <br/>Select electronics and original
            automotive spare parts sold by Amazon.eg are eligible for a limited
            warranty. See Amazon.eg’s Warranty Terms and Conditions. <br/>Back to
            cart
          </div>
        </div>
        <div className="col-span-1 bg-white p-5 rounded ms-5 h-fit">
            <button className="bg-yellow-400 px-4 py-2 rounded-3xl text-sm opacity-45">
              Deliver to this address

            </button>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
