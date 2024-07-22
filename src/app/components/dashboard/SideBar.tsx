import Link from "next/link";
import React from "react";

const SideBar = () => {
  return (
    <div className="bg-blue-300 sticky flex flex-col">
      <Link href={"/dashboard/users"}>Users</Link>
      <Link href={"/dashboard/products"}>Products</Link>
    </div>
  );
};

export default SideBar;
