import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../features/Sidebar/Sidebar";
import Topbar from "../features/Topbar/Topbar";
import BackgroundOverlay from "../components/common/backgroundOverlay";

import { getLenis, startLenis } from "../utils/lenis";

function MainLayout() {
  const location = useLocation();

  useEffect(() => {
    startLenis();
  }, []);

  useEffect(() => {
    const lenis = getLenis();

    lenis.scrollTo(0, {
      duration: 1,
    });
  }, [location.pathname]);

  return (
    <main id="root" className="flex">
      <Sidebar />
      <section className="grow *:px-6">
        <Topbar />
        <div id="content" className="mt-6 mx-auto">
          <div className="relative z-10">
            <Outlet />
          </div>
          <BackgroundOverlay />
        </div>
      </section>
    </main>
  );
}

export default MainLayout;
