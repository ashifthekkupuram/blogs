import { Outlet } from "react-router-dom";

import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";

const Layout = () => {
  return (
    <div className="layout">
      <div className="layout__top">
        <NavBar />
      </div>
      <div className="layout__bottom">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
