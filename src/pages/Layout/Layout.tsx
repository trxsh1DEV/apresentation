// src/components/Layout.jsx
import Sidebar from "@/components/customerComponents/Sidebar";
import { Outlet } from "react-router-dom";
import { userIsLogged } from "../Auth/token-methods";

const Layout = () => {
  return (
    <div className="flex">
      {userIsLogged() && <Sidebar />}
      {/* <ModeToggle /> */}
      <div className="flex-1 ml-[4.5rem]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
