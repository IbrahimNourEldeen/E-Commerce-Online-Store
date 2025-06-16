import { IoStar, IoStarOutline } from "react-icons/io5";
import {
  AddFilteredProducts,
  ClearFilterdProducts,
  type Product,
} from "../features/products/productSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/Store";
import type React from "react";

type Review = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

const CustomerReviews = () => {
  const dispatch = useDispatch();
  const { products, filteredProducts } = useSelector(
    (state: RootState) => state.products
  );

  const getAverageRating = (reviews: Review[]) => {
    if (!reviews?.length) return 0;
    const total = reviews.reduce((sum, r) => sum + r.rating, 0);
    return total / reviews.length;
  };

  const handleReviews = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const reviewsFields = [
    {
      id: "allrev",
      value: "all",
      label: "All",
      star: 0,
    },
    {
      id: "rvw1",
      value: "up to four",
      label: "& up",
      star: 4,
    },
    {
      id: "rvw2",
      value: "up to three",
      label: "& up",
      star: 3,
    },
    {
      id: "rvw3",
      value: "up to two",
      label: "& up",
      star: 2,
    },
    {
      id: "rvw4",
      value: "up to one",
      label: "& up",
      star: 1,
    },
  ];

  const handleStars = (s: number, id: string, label: string) => {
    return (
      <label htmlFor={id} className="text-yellow-600 flex items-center">
        {[...Array(5)].map((_, index) =>
          index < s ? <IoStar key={index} /> : <IoStarOutline key={index} />
        )}
        <span className="text-black ms-1">{label}</span>
      </label>
    );
  };

  return (
    <>
      <h4 className="font-bold">Customer Reviews</h4>
      <div className="">
        {reviewsFields.map((field, index) => (
          <div className="flex" key={index}>
            <input
              id={field.id}
              type="radio"
              className="me-2"
              name="review"
              value={field.value}
              onChange={handleReviews}
            />
            {field.star == 0 ? (
              <label htmlFor={field.id}>{field.label}</label>
            ) : (
              handleStars(field.star, field.id, field.label)
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default CustomerReviews;
