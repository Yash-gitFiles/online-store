import React from "react";
import { Outlet } from "react-router-dom";
import MenNavbar from "./MenNavbar";

function MenLayout() {
  return (
    <div>
      <MenNavbar />
      <Outlet />
    </div>
  );
}

export default MenLayout;
