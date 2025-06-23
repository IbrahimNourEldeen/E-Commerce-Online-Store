import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import type { Product } from "../features/products/productSlice";
import { IoStar, IoStarOutline } from "react-icons/io5";
import user from "../assets/default.png";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();
  const [amount, setAmount] = useState<number>(1);

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(data);
    };
    getProduct();
  }, []);
  const getAverageRating = (reviews) => {
    if (!reviews?.length) return 0;
    const total = reviews.reduce((sum, r) => sum + r.rating, 0);
    return total / reviews.length;
  };

  const handleAmount = (a: number) => {
    setAmount(a);
  };


  const handleCart = (product, amount: number) => {
    try {
      const cartStr = localStorage.getItem("cartProducts");

      let productsInCart = [];

      if (cartStr) {
        productsInCart = JSON.parse(cartStr);
      }

      const found = productsInCart.find((p) => p.id === product.id);

      if (found) {
        productsInCart.forEach((p) => {
          if (p.id === product.id) p.amount =Number(p.amount)+Number(amount);
        });
      } else {
        productsInCart.push({ ...product, amount });
      }

      localStorage.setItem("cartProducts", JSON.stringify(productsInCart));
    } catch (error) {
      console.error("Error accessing cart in cookies:", error);
    }
  };

  return (
    <div className=" pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-9 md:grid-cols-6 w-[92%] mx-auto border-b border-b-gray-400">
        <div className="lg:col-span-3 md:col-span-3">
          <div className="">
            <img src={product?.images[0]} alt="" />
          </div>
        </div>

        <div className="col-span-1 lg:col-span-4 md:col-span-3">
          <h2 className="text-3xl pe-5">{product?.description}</h2>
          <p className="text-yellow-600 flex items-center me-5 border-b border-b-gray-400">
            <span className="text-black me-2">
              {getAverageRating(product?.reviews).toFixed(1)}
            </span>
            {[...Array(5)].map((_, index) =>
              index < Math.round(getAverageRating(product?.reviews)) ? (
                <IoStar key={index} />
              ) : (
                <IoStarOutline key={index} />
              )
            )}
            <span className="text-blue-500 ms-2">
              {product?.reviews.length}{" "}
              {product?.reviews.length === 1 ? "rating" : "ratings"}
            </span>
          </p>

          <span className=" bg-red-700 text-sm font-semibold p-1 inline-block mt-1 text-white rounded">
            Limited time deal
          </span>
          <div className="flex items-center">
            <span className="text-red-600 text-2xl font-extralight me-3">
              -{product?.discountPercentage}%
            </span>
            <p className="text-3xl text-green-600">
              <sup className="text-sm">EGP</sup>
              {product?.price}
            </p>
          </div>
          <p className="">
            List Price:
            <span className="ms-2 text-gray-700 line-through">
              EGP{" "}
              {(
                product?.price *
                (1 + product?.discountPercentage / 100)
              ).toFixed(2)}
            </span>
          </p>
          <div className="flex py-3 gap-x-3  me-5 border-b border-b-gray-400">
            <div className="">
              <img
                src="https://m.media-amazon.com/images/G/42/A2I-Convert/mobile/IconFarm/icon-warranty._CB403797073_.png"
                className="w-[50px] mx-auto"
                alt=""
              />
              <h5 className="text-blue-900">{product?.warrantyInformation}</h5>
            </div>
            <div className="">
              <img
                src="https://m.media-amazon.com/images/G/42/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB403797073_.png"
                className="w-[50px] mx-auto"
                alt=""
              />
              <h5 className="text-blue-900">{product?.shippingInformation}</h5>
            </div>
            <div className="">
              <img
                src="https://m.media-amazon.com/images/G/42/A2I-Convert/mobile/IconFarm/icon-returns._CB403797073_.png"
                className="w-[50px] mx-auto"
                alt=""
              />
              <h5 className="text-blue-900">{product?.returnPolicy}</h5>
            </div>
            <div className="">
              <img
                src="https://m.media-amazon.com/images/G/42/A2I-Convert/mobile/IconFarm/icon-secure-transaction._CB414468582_.png"
                className="w-[50px] mx-auto"
                alt=""
              />
              <h5 className="text-blue-900">{product?.availabilityStatus}</h5>
            </div>
          </div>
          <div className="flex gap-x-1 py-3">
            <div>
              <h5 className="font-bold">Style:</h5>
              <h5 className="font-bold">Weight:</h5>
              <h5 className="font-bold">Brand Name:</h5>
            </div>
            <div className="">
              <p className="">{product?.sku}</p>
              <p className="">{product?.weight}g</p>
              <p className="">{product?.brand}</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-2 md:col-span-full">
          <div className="rounded-md border p-4 mb-3">
            <img
              src="https://m.media-amazon.com/images/G/42/marketing/prime/2022PrimeBrand/Logos/Prime_Logo_RGB_Prime_Blue_MASTER._CB542735200_.png"
              className="w-[70px]"
              alt=""
            />
            <p className="">
              Enjoy fast, free delivery, exclusive deals, and award-winning
              movies and TV shows.
            </p>
            <a href="" className="hover:text-red-400">
              Join Prime
            </a>
          </div>
          <div className="rounded-md border p-4">
            <p className="text-3xl">
              <sup className="text-sm">EGP</sup>
              {product?.price}
            </p>

            <h3 className="text-green-600 font-semibold">In Stock</h3>
            <div className="relative">
              <span className=" absolute top-4 start-3">Quantity : </span>
              <select
                name="quantity"
                id=""
                className="w-full py-2 ps-20 rounded-md bg-gray-200 my-2"
                onChange={(e) => handleAmount(e.target.value)}
              >
                {[...Array(product?.stock || 1)].map((_, index) => (
                  <option key={index} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </select>
            </div>
            <button
              className="w-full bg-amber-300  py-2 rounded-3xl my-2 cursor-pointer hover:bg-[#f9c700]"
              onClick={() => handleCart(product, amount)}
            >
              Add To Cart
            </button>
            <button className="w-full bg-amber-500  py-2 rounded-3xl cursor-pointer hover:bg-[#ff9d00]">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className=" mt-10 flex flex-col items-center ">
        <h2 className="text-2xl font-bold">Top reviews</h2>
        {product?.reviews.map((review, index) => (
          <div className="w-[50%] my-5">
            <p className="flex">
              <img src={user} className="w-[30px] me-2" alt="" />
              {review.reviewerName}
            </p>

            <div className="text-yellow-600 flex items-center">
              {[...Array(5)].map((_, index) =>
                index < Math.round(review.rating) ? (
                  <IoStar key={index} />
                ) : (
                  <IoStarOutline key={index} />
                )
              )}
            </div>
            <p className="">{review.comment}</p>
            <button>Report</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
