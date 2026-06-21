import { Outlet } from "react-router-dom";
import { useState } from "react";

import Sidebar from "../components/common/Sidebar";
import Header from "../components/common/Header";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
  className="
  min-h-screen
  bg-slate-50
  dark:bg-slate-950
  transition-all
"
>
      <div className="flex">
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

        <div className="flex-1 min-w-0">
          <Header toggleSidebar={() => setSidebarOpen((prev) => !prev)} />

          <main
            className="
              max-w-[1600px]
              mx-auto
              px-6
              md:px-8
              py-8
            "
          >
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
