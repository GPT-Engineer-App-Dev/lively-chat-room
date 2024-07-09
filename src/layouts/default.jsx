import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Outlet />
    </main>
  );
};

export default Layout;