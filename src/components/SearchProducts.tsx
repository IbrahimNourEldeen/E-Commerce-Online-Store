import { MdOutlineSearch } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store/Store';
import { type Product } from '../features/products/productSlice';
import { useState } from 'react';
import { AddFilteredProducts } from '../features/products/filterSlice';

const SearchProducts = () => {
    const { products } = useSelector((state: RootState) => state.products);
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchValue(value);

        const filtered: Product[] = products?.filter((product) =>
            product.title.toLowerCase().includes(value.toLowerCase())
        ) ?? [];

        dispatch(AddFilteredProducts(filtered));
    };

    return (
        <div className="flex justify-center items-center rounded bg-gray-100 h-fit shadow w-full">
            <input
                type="text"
                placeholder="Search for products..."
                className="w-full py-3 px-4 focus:outline-none"
                onChange={handleChange}
                value={searchValue}
            />
            <button className="text-white text-2xl p-3 rounded bg-[#1e3e53]">
                <MdOutlineSearch />
            </button>
        </div>
    );
};

export default SearchProducts;
