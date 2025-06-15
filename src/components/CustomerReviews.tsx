import { IoStar, IoStarOutline } from "react-icons/io5";
import {
  AddFilteredProducts,
  ClearFilterdProducts,
  type Product,
} from "../features/products/productSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/Store";
import type React from "react";

const CustomerReviews = () => {
  const dispatch = useDispatch();
  const { products, filteredProducts } = useSelector(
    (state: RootState) => state.products
  );

  const getAverageRating = (reviews) => {
    if (!reviews?.length) return 0;
    const total = reviews.reduce((sum, r) => sum + r.rating, 0);
    return total / reviews.length;
  };

  const handleReviews = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const filtered:Product;
    const value = e.target.value;

    let filtered: Product[] = [];

    switch (value) {
      case "all":
        dispatch(ClearFilterdProducts());
        return;

      case "up to four":
        filtered =
          (filteredProducts || products)?.filter((product) => {
            const avg = getAverageRating(product.reviews);
            return avg >= 4;
          }) || [];
        break;

      case "up to three":
        filtered =
          (filteredProducts || products)?.filter((product) => {
            const avg = getAverageRating(product.reviews);
            return avg >= 3;
          }) || [];
        break;

      case "up to two":
        filtered =
          (filteredProducts || products)?.filter((product) => {
            const avg = getAverageRating(product.reviews);
            return avg >= 2;
          }) || [];
        break;

      case "up to one":
        filtered =
          (filteredProducts || products)?.filter((product) => {
            const avg = getAverageRating(product.reviews);
            return avg >= 1;
          }) || [];
        break;

      default:
        break;
    }

    dispatch(AddFilteredProducts(filtered));
  };
  return (
    <>
      <h4 className="font-bold">Customer Reviews</h4>
      <div className="">
        <div className="">
          <input
            id="allrev"
            type="radio"
            className="me-2"
            name="review"
            value="all"
            onChange={handleReviews}
          />
          <label htmlFor="allrevs">All</label>
        </div>
        <div className="flex">
          <input
            id="rvw1"
            type="radio"
            className="me-2"
            name="review"
            value="up to four"
            onChange={handleReviews}
          />
          <label htmlFor="rvw1" className="text-yellow-600 flex items-center">
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStarOutline />
            <span className="text-black ms-1"> & up</span>
          </label>
        </div>
        <div className="flex">
          <input
            id="rvw2"
            type="radio"
            className="me-2"
            name="review"
            value="up to three"
            onChange={handleReviews}
          />
          <label htmlFor="rvw2" className="text-yellow-600 flex items-center">
            <IoStar />
            <IoStar />
            <IoStar />
            <IoStarOutline />
            <IoStarOutline />
            <span className="text-black ms-1"> & up</span>
          </label>
        </div>
        <div className="flex">
          <input
            id="rvw3"
            type="radio"
            className="me-2"
            name="review"
            value="up to two"
            onChange={handleReviews}
          />
          <label htmlFor="rvw3" className="text-yellow-600 flex items-center">
            <IoStar />
            <IoStar />
            <IoStarOutline />
            <IoStarOutline />
            <IoStarOutline />
            <span className="text-black ms-1"> & up</span>
          </label>
        </div>
        <div className="flex">
          <input
            id="rvw3"
            type="radio"
            className="me-2"
            name="review"
            value="up to one"
            onChange={handleReviews}
          />
          <label htmlFor="rvw3" className="text-yellow-600 flex items-center">
            <IoStar />
            <IoStarOutline />
            <IoStarOutline />
            <IoStarOutline />
            <IoStarOutline />
            <span className="text-black ms-1"> & up</span>
          </label>
        </div>
      </div>
    </>
  );
};

export default CustomerReviews;
