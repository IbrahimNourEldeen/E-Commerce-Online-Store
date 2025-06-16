import type React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddFilteredProducts,
  ClearFilterdProducts,
  type Product,
} from "../features/products/productSlice";
import type { RootState } from "../store/Store";

const Price = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state: RootState) => state.products);

  const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let filtered: Product[] = [];

    switch (value) {
      case "all":
        dispatch(ClearFilterdProducts());
        return;

      case "Under EGP 100":
        filtered = products?.filter((product) => product.price <= 100) || [];
        break;
      case "Under EGP 400":
        filtered = products?.filter((product) => product.price <= 400) || [];
        break;
      case "Under EGP 800":
        filtered = products?.filter((product) => product.price <= 800) || [];
        break;
      case "Under EGP 1600":
        filtered = products?.filter((product) => product.price <= 1600) || [];
        break;
      case "EGP 1,600 & above":
        filtered = products || [];
        break;
      default:
        break;
    }
    dispatch(
      AddFilteredProducts(filtered.sort((a, b) => b.price - a.price) || null)
    );
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
