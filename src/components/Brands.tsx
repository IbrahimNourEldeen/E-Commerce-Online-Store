import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/Store";
import {
  AddFilteredProducts,
  ClearFilterdProducts,
  type Product,
} from "../features/products/productSlice";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

const Brands = () => {
  const dispatch = useDispatch();

  const [limit, setLimit] = useState<number>(5);
  const [brands, setBrands] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const { products } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    const uniqueBrands: string[] = Array.from(
      new Set(products?.map((product: Product) => product.brand))
    );
    setBrands(uniqueBrands);
  }, [products]);

  const handleBrand = (e: React.ChangeEvent<HTMLInputElement>) => {
    const brand = e.currentTarget.value;
    const checked = e.currentTarget.checked;

    setSelectedBrands((prev) => {
      const updated = checked
        ? [...prev, brand]
        : prev.filter((b) => b !== brand);

      const filtered: Product[] =
        updated.length > 0
          ? products?.filter((product) => updated.includes(product.brand))
          : null;

      dispatch(ClearFilterdProducts());
      dispatch(AddFilteredProducts(filtered));

      return updated;
    });
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
