import { ReactNode } from "react";
import SideBar from "../components/dashboard/SideBar";
import NavBar from "../components/dashboard/NavBar";

const LayOut = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <div className="w-1/4">
        <SideBar />
      </div>
      <div className="w-3/4">
        <NavBar />
        {children}
      </div>
    </div>
  );
};

export default LayOut;
