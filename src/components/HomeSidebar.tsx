import React, { useEffect, useState } from "react";
import { AddFilteredProducts, ClearFilterdProducts, type Product } from "../features/products/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import type { RootState } from "../store/Store";

const HomeSidebar = () => {
    const dispatch = useDispatch();
    const [brands, setBrands] = useState<string[]>([]);
    const { products } = useSelector((state: RootState) => state.products)
    const [limit, setLimit] = useState<number>(5)

    useEffect(() => {
        const uniqueBrands: string[] = Array.from(new Set(products?.map((product: Product) => product.brand)))
        setBrands(uniqueBrands)
    }, [products])

    const handleBrand = async (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(ClearFilterdProducts())
        const brand = e.currentTarget.value;
        const filtered = products?.filter((product: Product) => product.brand === brand) || [] 
        dispatch(AddFilteredProducts(filtered));
    }


    const handleLimit = () => {
        if (limit === 20) {
            setLimit(limit - 15)
        } else {
            setLimit(limit + 15)
        }
    }

    return (
        <div className="ps-2">
                <button
                    onClick={() => dispatch(ClearFilterdProducts())}
                    className="mb-2 text-blue-600 text-left"
                >
                    Show All
                </button>
            <h4 className="font-bold">
                Brands
            </h4>
            <div className="flex flex-col justify-start">
                {
                    brands.slice(0, limit).map((brand, index) => (
                        <div className="">
                            <input
                                id={String(index)}
                                key={brand}
                                type="radio"
                                className="me-2"
                                name='brand'
                                value={brand}
                                onChange={handleBrand}
                            />
                            <label htmlFor={String(index)}>{brand}</label>
                        </div>
                    ))
                }
                <button
                    onClick={handleLimit}
                    className="flex items-center text-blue-600"
                >
                    {
                        limit === 5 ? (
                            <>
                                <MdExpandMore />
                                see more
                            </>
                        ) : (
                            <>
                                <MdExpandLess />
                                see less
                            </>
                        )
                    }

                </button>
            </div>
        </div>
    )
}

export default HomeSidebar