import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Login from "../pages/Login";
import { useSelector } from "react-redux";
import type { RootState } from "../store/Store";

const MainLayout = () => {
  const isAuthed = useSelector((state: RootState) => state.user.isAuthed);

  return isAuthed ? (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-160px)]">
        <Outlet />
      </main>
      <Footer />
    </>
  ) : (
    <Login />
  );
};

export default MainLayout;
