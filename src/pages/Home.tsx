import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/Store";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { AddProducts } from "../features/products/productSlice";
import HomeSidebar from "../components/HomeSidebar";
import { GrNext, GrPrevious } from "react-icons/gr";

const Home = () => {
  const { products, filteredProducts } = useSelector(
    (state: RootState) => state.products
  );
  const dispatch = useDispatch<AppDispatch>();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 20;

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `https://dummyjson.com/products?limit=100`
      );
      dispatch(AddProducts(data.products));
    };
    getData();
  }, [dispatch]);

  const paginationData = (filteredProducts || products)?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalProducts: number = (filteredProducts || products)?.length || 0;
  const totalPages: number = Math.ceil(totalProducts / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getPaginationButtons = () => {
    const buttons: number[] = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (currentPage - 2 < 1) {
      endPage = Math.min(totalPages, endPage + (1 - (currentPage - 2)));
    }

    if (currentPage + 2 > totalPages) {
      startPage = Math.max(1, startPage - (currentPage + 2 - totalPages));
    }

    for (let page = startPage; page <= endPage; page++) {
      buttons.push(page);
    }

    return buttons;
  };

  const elementRef = useRef<HTMLDivElement>(null);
  const [isFixed, setIsFixed] = useState(false);
  const [offsetTop, setOffsetTop] = useState<number | null>(null);

  useEffect(() => {
    if (elementRef.current) {
      setOffsetTop(elementRef.current.offsetTop);
    }
    const handleScroll = () => {
      if (offsetTop !== null) {
        if (window.scrollY >= offsetTop) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offsetTop]);

const [selectedImages, setSelectedImages] = useState<Record<number, number>>({});

  return (
    <div className="flex">
      <div className="hidden md:block w-[250px] bg-white h-screen">
        <div
          className={`transition-all duration-300 w-[100%] z-50 h-full overflow-y-auto hide-scrollbar ${
            isFixed ? "fixed top-0 left-0" : "relative"
          }`}
          ref={elementRef}
        >
          <HomeSidebar />
        </div>
      </div>

      <section className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6  gap-4">
          {paginationData?.map((product, index) => (
            <div key={index} className="w-[170px] mx-auto text-center">
              <button className="cursor-pointer">
                <img
                  src={
                    product.images[
                      selectedImages[index]?? 0
                    ]
                  }
                  className="w-full h-auto object-cover mb-2 bg-[#f7f8f8]"
                  alt={product.title}
                />
                <div className=" text-red-700 text-sm font-semibold">
                  <span className="bg-red-700 text-white rounded p-1">
                    15% off
                  </span>{" "}
                  Limited time deal
                </div>
                <h4 className="text-sm font-medium">{product.title}</h4>
              </button>

              <div className="flex gap-x-2 justify-center mt-2">
                {product.images.length > 1 &&
                  product.images.map((image, i) => (
                    <div
                      key={i}
                      onClick={() =>
                        setSelectedImages((prev) => ({
                          ...prev,
                          [index]: i,
                        }))
                      }
                      className={`w-[20px] h-[20px] rounded-full cursor-pointer ${
  selectedImages[index] === i ? "bg-green-500" : "bg-gray-300"
}`}
                    ></div>
                  ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center mt-5">
          <button
            className="border px-4 py-2 mx-2 rounded-full"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <GrPrevious />
          </button>

          <div className="flex flex-wrap justify-center">
            {getPaginationButtons().map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`border px-4 py-2 mx- rounded-full ${
                  page === currentPage ? "bg-black text-white" : ""
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            className="border px-4 py-2 mx-2 rounded-full"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <GrNext />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
