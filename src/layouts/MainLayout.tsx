import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


const MainLayout = () => {
    
  return (
    <>
        <Navbar/>
            <Outlet></Outlet>
        <Footer/>
    </>
  )
}

export default MainLayout