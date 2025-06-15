import { useDispatch, useSelector } from "react-redux";
import { AddFilteredProducts, ClearFilterdProducts, type Product } from "../features/products/productSlice";
import type { RootState } from "../store/Store";

const Discount = () => {
   const dispatch = useDispatch();
  const { products } = useSelector(
    (state: RootState) => state.products
  );

  const handleDiscount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let filtered: Product[] = [];

    switch (value) {
      case "all":
        dispatch(ClearFilterdProducts());
        return;

      case "10% off or more":
        filtered =
          products?.filter((product) => product.discountPercentage>=10) ||
          [];
        break;
      case "25% off or more":
        filtered =
          products?.filter((product) => product.discountPercentage>=25) ||
          [];
        break;
      case "50% off or more":
        filtered =
          products?.filter((product) => product.discountPercentage>=50) ||
          [];
        break;
      case "70% off or more":
        filtered =
          products?.filter((product) => product.discountPercentage>=70) ||
          [];
        break;
      default:
        break;
    }
    dispatch(AddFilteredProducts(filtered||null));
  };
  return (
    <>
      <h4 className="font-bold">Discount</h4>
      <div className="">
        <div className="">
          <input
            id="alldiscounts"
            type="radio"
            className="me-2"
            name="discount"
            value="all"
              onChange={handleDiscount}
          />
          <label htmlFor="allrevs">All</label>
        </div>
        <div className="flex">
          <input
            id="num1"
            type="radio"
            className="me-2"
            name="discount"
            value="10% off or more"
              onChange={handleDiscount}
          />
          <label htmlFor="num1" className="">
            10% off or more
          </label>
        </div>
        <div className="flex">
          <input
            id="num2"
            type="radio"
            className="me-2"
            name="discount"
            value="25% off or more"
              onChange={handleDiscount}
          />
          <label htmlFor="num2" className="">
            25% off or more
          </label>
        </div>
        <div className="flex">
          <input
            id="num3"
            type="radio"
            className="me-2"
            name="discount"
            value="50% off or more"
              onChange={handleDiscount}
          />
          <label htmlFor="num3" className="">
            50% off or more
          </label>
        </div>
        <div className="flex">
          <input
            id="num4"
            type="radio"
            className="me-2"
            name="discount"
            value="70% off or more"
              onChange={handleDiscount}
          />
          <label htmlFor="num4" className="">
            70% off or more
          </label>
        </div>
      </div>
    </>
  );
};

export default Discount;
