import { Link } from "react-router-dom"
import poster from "../assets/icon.png"
import { FaCaretDown, FaChevronRight, FaOpencart, FaUserCircle } from "react-icons/fa"
import { TiLocationOutline } from "react-icons/ti"
import SearchProducts from "./SearchProducts"
import { FiAlignJustify } from "react-icons/fi"
import Categories from "./Categories"
import { useState } from "react"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleSideBar= () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="relative">
      <nav className="bg-blue-50 shadow md:overflow-x-auto hide-scrollbar">
        <div className="container hidden md:block lg:w-[90%] lg:mx-auto py-2">

          <div className="grid grid-cols-[1fr_1fr_4fr_2fr] items-center min-w-[300px]">

            <div className="md:block min-w-[100px] max-h-[50px]">
              <Link to={'/'}>
                <img src={poster} className="w-[150px]" />
              </Link>
            </div>

            <div className=" min-w-[120px] block">
              <button className="flex bg-gray-100 px-2 rounded shadow p-2">
                <TiLocationOutline className="translate-y-5 text-2xl" />
                <div className="font-bold ">
                  <span className="text-gray-400 block font-normal">Deliver to</span>
                  Egypt
                </div>
              </button>
            </div>

            <div className=" h-fit ps-5 w-full  min-w-[200px] block">
              <SearchProducts />
            </div>


            <div className="flex justify-around items-center min-w-[100px]">
              <button className="min-w-[45px]  block">
                En
                <FaCaretDown className="inline-block" />
              </button>

              <button className=" w-fit h-fit p-3  min-w-[159px]">
                <span className=" inline">Hello, </span>sign in
                <p className=" inline-block font-bold">Account & Lists</p>
                <FaCaretDown className="inline-block" />
              </button>

              <button className="mx-2 font-bold  block">Orders</button>
              <div className="relative">
                <button className="text-2xl translate-1 text-orange-600 bg-orange-100 p-2 rounded-full"> <FaOpencart /> </button>
                <span className="absolute right-1 text-white bg-orange-600 rounded-full px-1 text-xs">1</span>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <div className="container flex p-2 ">
            <div className="my-auto">
              <FiAlignJustify className="text-3xl mx-2 cursor-pointer" onClick={toggleSideBar}/>
            </div>
            <div className="grid grid-cols-2 items-center w-full">
              <div className="md:block col-span-1 min-w-[100px] max-h-[50px]">
                <Link to={'/'}>
                  <img src={poster} className="w-[150px]" />
                </Link>
              </div>

              <div className="flex col-span-1 justify-around items-center">
                <button className=" w-fit h-fit p-3 min-w-22 cursor-pointer ">
                  sign in
                  <FaCaretDown className="inline-block" />
                </button>
                <div className="relative cursor-pointer">
                  <button className="text-2xl translate-1 cursor-pointer text-orange-600 bg-orange-100 p-2 rounded-full"> <FaOpencart /> </button>
                  <span className="absolute right-1 text-white bg-orange-600 rounded-full px-1 text-xs">1</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[90%] py-2 mx-auto">
            <SearchProducts />
          </div>
        </div>
      </nav>
      <Categories toggle={toggleSideBar} />


      <section className={`fixed z-60 w-72 h-screen top-0 left-0  bg-white overflow-auto shadow-2xl shadow-black transition duration-75 ${isOpen?'':"hidden"}`}>
        <button 
          className="absolute end-1 px-2 top-2 text-white border cursor-pointer rounded"
          onClick={toggleSideBar}
        >
          X
        </button>
        <div className="bg-[#1e3e53] ps-5 py-2">
          <h2 className=" text-white font-bold text-xl ">
            <FaUserCircle className="inline-block -translate-y-1 me-2" />
            Hello, sign in
          </h2>
        </div>
        <div className="pt-5 ps-10" >
          <h3 className="font-bold">
            Trending
          </h3>
          <ul className="">
            <li className="pt-3">
              <button>
                Best Sellers
              </button>
            </li>
            <li className="my-3">
              <button>
                New Releases
              </button>
            </li>
            <li className="pb-3">
              <button>
                Movers & Shkers
              </button>
            </li>
          </ul>
        </div>
        <div className="py-5 ps-10 border-y border-gray-300 " >
          <h3 className="font-bold">
            Digital content and devices
          </h3>
          <button className="pt-3">
            Amazon Kindle E-readers
            <FaChevronRight className="inline-block ms-11 text-gray-800"/>
          </button>
        </div>

        <div className="pt-5 ps-10" >
          <h3 className="font-bold">
            Shop by Category
          </h3>
          <ul className="">
            <li className="pt-3">
              <button>
                electronics
                <FaChevronRight className="inline-block ms-37 text-gray-800"/>
              </button>
            </li>
            <li className="my-3">
              <button>
                jwelery
                <FaChevronRight className="inline-block ms-43 text-gray-800"/>
              </button>
            </li>
            <li className="pb-3">
              <button>
                men's clothing
                <FaChevronRight className="inline-block ms-29 text-gray-800"/>
              </button>
            </li>
            <li className="pb-3">
              <button>
                women's clothing
                <FaChevronRight className="inline-block ms-24 text-gray-800"/>
              </button>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Navbar