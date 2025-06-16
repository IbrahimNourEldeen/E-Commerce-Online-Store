import { useDispatch, useSelector } from "react-redux";
import {
  AddFilteredProducts,
  ClearFilterdProducts,
  type Product,
} from "../features/products/productSlice";
import type { RootState } from "../store/Store";

const Discount = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state: RootState) => state.products);

  const handleDiscount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let filtered: Product[] = [];

    switch (value) {
      case "all":
        dispatch(ClearFilterdProducts());
        return;

      case "10% off or more":
        filtered =
          products?.filter((product) => product.discountPercentage >= 10) || [];
        break;
      case "25% off or more":
        filtered =
          products?.filter((product) => product.discountPercentage >= 25) || [];
        break;
      case "50% off or more":
        filtered =
          products?.filter((product) => product.discountPercentage >= 50) || [];
        break;
      case "70% off or more":
        filtered =
          products?.filter((product) => product.discountPercentage >= 70) || [];
        break;
      default:
        break;
    }
    dispatch(AddFilteredProducts(filtered || null));
  };

  const discountFields = [
    {
      id: "alldiscounts",
      value: "all",
      label: "All",
    },
    {
      id: "num1",
      value: "10% off or more",
      label: "10% off or more",
    },
    {
      id: "num2",
      value: "25% off or more",
      label: "25% off or more",
    },
    {
      id: "num3",
      value: "50% off or more",
      label: "50% off or more",
    },
    {
      id: "num4",
      value: "70% off or more",
      label: "70% off or more",
    }
  ];
  return (
    <>
      <h4 className="font-bold">Discount</h4>
      <div className="">
        {discountFields.map((field, index) => (
          <div className="flex">
            <input
              key={index}
              id={field.id}
              type="radio"
              className="me-2"
              name="discount"
              value={field.value}
              onChange={handleDiscount}
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

export default Discount;
