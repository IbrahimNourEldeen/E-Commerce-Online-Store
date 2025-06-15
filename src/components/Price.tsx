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
  const { products } = useSelector(
    (state: RootState) => state.products
  );

  const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let filtered: Product[] = [];

    switch (value) {
      case "all":
        dispatch(ClearFilterdProducts());
        return;

      case "Under EGP 100":
        filtered =
          products?.filter((product) => product.price<=100) ||
          [];
        break;
      case "Under EGP 400":
        filtered =
          products?.filter((product) => product.price<=400) ||
          [];
        break;
      case "Under EGP 800":
        filtered =
          products?.filter((product) => product.price<=800) ||
          [];
        break;
      case "Under EGP 1600":
        filtered =
          products?.filter((product) => product.price<=1600) ||
          [];
        break;
      case "EGP 1,600 & above":
        filtered =  products || []
        break;
      default:
        break;
    }
    dispatch(AddFilteredProducts(filtered.sort((a,b)=>b.price-a.price)||null));
  };
  return (
    <>
      <h4 className="font-bold">Price</h4>
      <div className="">
        <div className="">
          <input
            id="allprices"
            type="radio"
            className="me-2"
            name="price"
            value="all"
            onChange={handlePrice}
          />
          <label htmlFor="allrevs">All</label>
        </div>
        <div className="flex">
          <input
            id="range1"
            type="radio"
            className="me-2"
            name="price"
            value="Under EGP 100"
            onChange={handlePrice}
          />
          <label htmlFor="range1" className="">
            Under EGP 100
          </label>
        </div>
        <div className="flex">
          <input
            id="range2"
            type="radio"
            className="me-2"
            name="price"
            value="Under EGP 400"
            onChange={handlePrice}
          />
          <label htmlFor="range2" className="">
            Under EGP 400
          </label>
        </div>
        <div className="flex">
          <input
            id="range3"
            type="radio"
            className="me-2"
            name="price"
            value="Under EGP 800"
            onChange={handlePrice}
          />
          <label htmlFor="range3" className="">
            Under EGP 800
          </label>
        </div>
        <div className="flex">
          <input
            id="range4"
            type="radio"
            className="me-2"
            name="price"
            value="Under EGP 1600"
            onChange={handlePrice}
          />
          <label htmlFor="range4" className="">
            Under EGP 1600
          </label>
        </div>
        <div className="flex">
          <input
            id="range5"
            type="radio"
            className="me-2"
            name="price"
            value="EGP 1,600 & above"
            onChange={handlePrice}
          />
          <label htmlFor="range5" className="">
            EGP 1,600 & above
          </label>
        </div>
      </div>
    </>
  );
};

export default Price;
