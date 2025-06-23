import { useEffect, useState } from "react";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState<any[]>([]);

  useEffect(() => {
    const cartStr = localStorage.getItem("cartProducts");
    let productsInCart = [];

    if (cartStr) {
      productsInCart = JSON.parse(cartStr);
    }

    setCartProducts(productsInCart);
  }, []);

  const updateLocalStorage = (products: any[]) => {
    localStorage.setItem("cartProducts", JSON.stringify(products));
  };

  const handleAmountChange = (id: number, type: "inc" | "dec") => {
    const updated = cartProducts.map((product) => {
      if (product.id === id) {
        let newAmount = product.amount;
        if (type === "inc") newAmount++;
        if (type === "dec" && newAmount > 1) newAmount--;
        return { ...product, amount: newAmount };
      }
      return product;
    });

    setCartProducts(updated);
    updateLocalStorage(updated);
  };

  const subtotal = cartProducts.reduce((acc, product) => {
    return acc + product.price * product.amount;
  }, 0);

  const totalItems = cartProducts.reduce(
    (acc, product) => acc + product.amount,
    0
  );
  const handleDelete = (id:number) =>{
    const updated = cartProducts.filter((product) => product.id !==id )
    setCartProducts(updated);
    updateLocalStorage(updated);
  }

  return (
    <div className="bg-gray-200 p-3 grid grid-cols-5 gap-x-3">
      <div className=" bg-white col-span-4">
        <h3 className="text-3xl border-b-2 p-3 border-gray-200">
          Shopping Cart
        </h3>
        <div className="p-3">
          {cartProducts.map((product) => (
            <div
              key={product.id}
              className=" grid grid-cols-10 border-b-2 border-gray-200 p-3"
            >
              <div className="col-span-2 ">
                <img src={product.images[0]} alt="" className="h-[100px]" />
              </div>
              <div className="col-span-6">
                <h3>{product.description}</h3>
                <div className="flex items-center gap-x-2">
                  <div className="mt-3 rounded-3xl border-3 border-yellow-400 w-[100px] flex items-center justify-between px-3 font-bold">
                    <button
                      className="text-2xl cursor-pointer"
                      onClick={() => handleAmountChange(product.id, "dec")}
                    >
                      -
                    </button>
                    {product.amount}
                    <button
                      className="text-2xl cursor-pointer"
                      onClick={() => handleAmountChange(product.id, "inc")}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="text-blue-700 mt-3 border-s-1 ps-2 border-gray-400 cursor-pointer"
                    onClick={() => handleDelete(product.id)}
                  >
                    delete
                  </button>
                </div>
              </div>
              <div className="col-span-2">
                <p className="text-end">EGP{product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
          <p className="mt-3 text-end text-xl">
            Subtotal ({totalItems} items):{" "}
            <span className="font-bold">EGP {subtotal.toFixed(2)}</span>
          </p>
        </div>
      </div>

      <div className="col-span-1 bg-white p-5 h-fit">
        <div className="flex gap-x-3">
          <RiVerifiedBadgeFill className=" text-green-600 text-4xl" />
          <p>
            <span className="text-green-600">
              Your order qualifies for FREE Shipping
            </span>{" "}
            Choose this option at checkout
          </p>
        </div>
        <div className="mt-3">
          <p className=" text-xl">
            Subtotal ({totalItems} items):{" "}
            <span className="font-bold">EGP {subtotal.toFixed(2)}</span>
          </p>
        </div>
        <button className="bg-yellow-300 text-sm w-full py-2 rounded-2xl cursor-pointer">
          Proceed to Buy
        </button>
      </div>
    </div>
  );
};

export default Cart;
