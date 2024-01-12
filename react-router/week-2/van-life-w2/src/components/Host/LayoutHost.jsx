import { Outlet } from "react-router-dom";
import NavBarHost from "./NavBarHost";

function LayoutHost() {
  return (
    <>
      <NavBarHost />
      <Outlet />
    </>
  );
}

export default LayoutHost;
