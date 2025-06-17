import { useEffect, useState } from "react";
import axios from "axios";
import { FiAlignJustify } from "react-icons/fi";
import img from "../assets/fashion week.jpg";
import { useDispatch } from "react-redux";
import { AddFilteredProducts } from "../features/products/filterSlice";

type CategoryProps = {
  toggle: () => void;
};
type Categories = {
  name:string;
  slug:string;
}
const Categories = ({ toggle }: CategoryProps) => {

  const [categories, setCategories] = useState<Categories[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await axios.get("https://dummyjson.com/products/categories");
        setCategories(data.slice(0, 5));
        console.log(data)
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };
    getCategories();
  }, []);

  const handleClick = async (name: string) => {
    try {
      const { data } = await axios.get(`https://dummyjson.com/products/category/${name}`);
      dispatch(AddFilteredProducts(data.products));
    } catch (error) {
      console.error("Failed to fetch category products", error);
    }
  };

  return (
    <div className="bg-[#1e3e53] text-white hidden md:flex justify-between md:overflow-x-auto hide-scrollbar">
      <ul className="flex p-2 min-w-[551px]">
        <li className="me-5 min-w-[51px]">
          <button className="cursor-pointer" onClick={toggle}>
            <FiAlignJustify className="text-2xl mx-1 inline-block" />
            All
          </button>
        </li>
        {categories?.map((category,index) => (
          <li key={index} className="grow text-center">
            <button
              className="cursor-pointer capitalize"
              onClick={() => handleClick(category.slug)}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
      <div>
        <img
          src={img}
          alt="Fashion"
          className="ms-auto h-[42px] w-[400px] object-cover cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Categories;
