import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../index.css";
function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="align-content">
        {" "}
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
