import { Outlet } from "react-router";
import { useDynamicTitle } from "../hooks/useDynamicTitle";

export default function MainLayout() {
  useDynamicTitle();
  return (
    <div>
      <Outlet />
    </div>
  );
}
