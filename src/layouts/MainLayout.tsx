import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Login from "../pages/Login";
import { useSelector } from "react-redux";

const MainLayout = () => {
  const isRigisterd: boolean = false;
  const isAuthed = useSelector((state))
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
