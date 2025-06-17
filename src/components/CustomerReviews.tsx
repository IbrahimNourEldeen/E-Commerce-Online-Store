import { IoStar, IoStarOutline } from "react-icons/io5";

import { useDispatch } from "react-redux";
import type React from "react";
import { setSelectedReview } from "../features/products/filterSlice";
import { applyFilters } from "../features/products/thunks/filterThunks";

const CustomerReviews = () => {
  const dispatch = useDispatch();

  const handleReviews = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setSelectedReview(value));
    dispatch(applyFilters());
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
