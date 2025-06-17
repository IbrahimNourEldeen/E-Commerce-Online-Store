import type React from "react";
import { useDispatch } from "react-redux";

import { setSelectedPrice } from "../features/products/filterSlice";
import { applyFilters } from "../features/products/thunks/filterThunks";

const Price = () => {
  const dispatch = useDispatch();

  const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setSelectedPrice(value));
    dispatch(applyFilters());
  };

  const pricesFields = [
    {
      id: "allprices",
      value: "all",
      label: "All",
    },
    {
      id: "range1",
      value: "Under EGP 100",
      label: "Under EGP 100",
    },
    {
      id: "range2",
      value: "Under EGP 400",
      label: " Under EGP 400",
    },
    {
      id: "range3",
      value: "Under EGP 800",
      label: "Under EGP 800",
    },
    {
      id: "range4",
      value: "Under EGP 1600",
      label: "Under EGP 1600",
    },
    {
      id: "range4",
      value: "EGP 1,600 & above",
      label: "EGP 1,600 & above",
    },
  ];
  return (
    <>
      <h4 className="font-bold">Price</h4>
      <div className="">
        {pricesFields.map((field, index) => (
          <div className="flex">
            <input
              key={index}
              id={field.id}
              type="radio"
              className="me-2"
              name="price"
              value={field.value}
              onChange={handlePrice}
            />
            <label htmlFor={field.id} className="">
              {field.label}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default Price;
