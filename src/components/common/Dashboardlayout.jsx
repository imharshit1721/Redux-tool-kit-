import { Outlet } from "react-router-dom";
export default function Dashboardlayout() {
  return (
    <div>
      <div classname="min-h-screen">
        <Outlet />
      </div>
    </div>
  );
}
