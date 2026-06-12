import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Sidebar from "../features/Sidebar/Sidebar";
import Topbar from "../features/Topbar/Topbar";
import BackgroundOverlay from "../components/common/backgroundOverlay";

import { getLenis, startLenis } from "../utils/lenis";

function MainLayout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    startLenis();
  }, []);

  useEffect(() => {
    const lenis = getLenis();

    lenis.scrollTo(0, {
      duration: 1,
    });

    setSidebarOpen(false);
  }, [location.pathname]);

  return (
    <main
      id="root"
      className="
        flex
        min-h-screen
        bg-white
      "
    >
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <section
        className="
         py-0.2
          flex-1
          min-h-screen
          ml-0 md:ml-[250px]
          transition-all duration-300
          flex flex-col
        "
      >
        <Topbar onMenuClick={() => setSidebarOpen(true)} />

        <div
          id="content"
          className="
            flex-1
            w-full
            px-0 md:px-6 lg:px-10
            py-6
          "
        >
          <div className="relative z-10 w-full max-w-6xl mx-auto">
            <Outlet />
          </div>

          <BackgroundOverlay />
        </div>
      </section>
    </main>
  );
}

export default MainLayout;
