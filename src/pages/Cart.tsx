import { useEffect, useState } from "react";
import Cookies from "js-cookie";

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
    <div className="bg-gray-200 p-3">
      <div className=" bg-white">
        <h3 className="text-3xl border-b-2 p-3 border-gray-200">
          Shopping Cart
        </h3>
        <div className="p-3">
          {cartProducts.map((product) => (
            <div key={product.id}>
              <h3>{product.title}</h3>
              <p>Price: {product.price} EGP</p>
              <p>amount: {product.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
