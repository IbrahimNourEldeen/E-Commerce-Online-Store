import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/Store";
import { type Product } from "../features/products/productSlice";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { setSelectedBrands } from "../features/products/filterSlice";
import { applyFilters } from "../features/products/thunks/filterThunks";

const Brands = () => {
  const dispatch = useDispatch();

  const [limit, setLimit] = useState<number>(5);
  const [brands, setBrands] = useState<string[]>([]);
  const { selectedBrands } = useSelector((state: RootState) => state.filter);

  const { products } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    const uniqueBrands: string[] = Array.from(
      new Set(products?.map((product: Product) => product.brand))
    );
    setBrands(uniqueBrands);
  }, [products]);

  const handleBrand = (e: React.ChangeEvent<HTMLInputElement>) => {
    const brand: string = e.currentTarget.value;
    const checked: boolean = e.currentTarget.checked;
    const updated = checked
      ? [...selectedBrands, brand]
      : selectedBrands.filter((b) => b !== brand);

    dispatch(setSelectedBrands(updated));
    dispatch(applyFilters());
  };

  const handleLimit = () => {
    if (limit === 10) {
      setLimit(limit - 5);
    } else {
      setLimit(limit + 5);
    }
  };
  return (
    <>
      <h4 className="font-bold">Brands</h4>
      <div className="flex flex-col justify-start">
        {brands.slice(0, limit).map((brand, index) => (
          <div className="">
            <input
              id={String(index)}
              key={brand}
              type="checkbox"
              className="me-2"
              name="brand"
              value={brand}
              checked={selectedBrands.includes(brand)}
              onChange={handleBrand}
            />
            <label htmlFor={String(index)}>{brand}</label>
          </div>
        ))}
        <button
          onClick={handleLimit}
          className="flex items-center text-blue-600"
        >
          {limit === 5 ? (
            <>
              <MdExpandMore />
              see more
            </>
          ) : (
            <>
              <MdExpandLess />
              see less
            </>
          )}
        </button>
      </div>
    </>
  );
};

export default Brands;
