import { useDispatch } from "react-redux";
import { setSelectedDiscount } from "../features/products/filterSlice";
import { applyFilters } from "../features/products/thunks/filterThunks";


const Discount = () => {
  const dispatch = useDispatch();

  const handleDiscount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setSelectedDiscount(value));
    dispatch(applyFilters());
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
    },
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
