import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState<number[]>([]);

  useEffect(() => {
    const cartStr = Cookies.get("cartProducts");

    let productsInCart = [];

    if (cartStr) {
      productsInCart = JSON.parse(cartStr);
    }
    setCartProducts(productsInCart);
  }, []);

  return (
    <div className="bg-gray-200 p-3 grid grid-cols-5 gap-x-3">
      <div className=" bg-white col-span-4">
        <h3 className="text-3xl border-b-2 p-3 border-gray-200">
          Shopping Cart
        </h3>
        <div className="p-3">
          {cartProducts.map((product) => (
            <div className=" grid grid-cols-10 border-b-2 border-gray-200 p-3">
              <div key={product.id} className="col-span-2 ">
                <img src={product.images[0]} alt="" className="h-[100px]" />
              </div>
              <div key={product.id} className="col-span-6">
                <h3>{product.description}</h3>
                <div className="flex items-center gap-x-2">
                  <div className="mt-3 rounded-3xl border-3 border-yellow-400 w-[100px] flex items-center justify-between px-3 font-bold">
                    <span className="text-2xl">-</span>
                    {product.amount}
                    <span className="text-2xl">+</span>
                  </div>
                  <button className="text-blue-700 mt-3 border-s-1 ps-2 border-gray-400">
                    delete
                  </button>
                </div>
              </div>
              <div className="col-span-2">
                <p className="text-end">EGP{product.price}</p>
              </div>
            </div>
          ))}
          <p className="mt-3 text-end text-xl">
            Subtotal (8 items): <span className="font-bold"> EGP 499,365.27</span>
          </p>
        </div>
      </div>
      <div className="col-span-1 bg-white p-5 h-fit">
        <div className="flex gap-x-3">
          <RiVerifiedBadgeFill className=" text-green-600 text-4xl" />
          <p className="">
            <span className="text-green-600">
              Your order qualifies for FREE Shipping
            </span>{" "}
            Choose this option at checkout
          </p>
        </div>
        <div className="mt-3">
          <p className=" text-xl">
            Subtotal (8 items): <span className="font-bold"> EGP 499,365.27</span>
          </p>
        </div>
        <button className="bg-yellow-300 text-sm w-full py-2 rounded-2xl">
          Proceed to Buy
        </button>
      </div>
    </div>
  );
};

export default Cart;
