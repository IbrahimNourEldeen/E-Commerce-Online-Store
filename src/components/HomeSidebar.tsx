import {
  ClearFilterdProducts,
} from "../features/products/productSlice";
import { useDispatch } from "react-redux";
import CustomerReviews from "./CustomerReviews";
import Price from "./Price";
import Discount from "./Discount";
import Brands from "./Brands";

const HomeSidebar = () => {
  const dispatch = useDispatch();
  
  

  

  return (
    <div className="ps-2">
      <h4 className="font-bold">Department</h4>
      <div className="">
        <input
          type="radio"
          className="me-2"
          name="dpt"
          id="dpt"
          value={`All`}
          onChange={() => dispatch(ClearFilterdProducts())}
        />
        <label htmlFor="dpt">All</label>
      </div>

      <Brands/>
      <CustomerReviews />
      <Price />
      <Discount />
    </div>
  );
};

export default HomeSidebar;
