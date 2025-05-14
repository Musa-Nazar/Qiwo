import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Layout() {
  const xml = (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
  return xml;
}

export default Layout;
