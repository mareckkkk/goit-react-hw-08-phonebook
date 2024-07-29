import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from "./AppBar/AppBar";
import { useSelector } from "react-redux";
import { selecIsRefreshing } from "../redux/auth/selectors";

export const Layout = () => {
  const isRefreshing = useSelector(selecIsRefreshing);
  return (
    <div className="container">
      <AppBar />
      <Suspense
        fallback={isRefreshing === false && <div className="loader"></div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
