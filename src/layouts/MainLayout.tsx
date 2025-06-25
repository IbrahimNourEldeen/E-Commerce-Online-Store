import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Login from "../pages/Login";

const MainLayout = () => {
  const isRigisterd: boolean = false;
  return isRigisterd ? (
    <>
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </>
  ) : (
    <Login />
  );
};

export default MainLayout;
