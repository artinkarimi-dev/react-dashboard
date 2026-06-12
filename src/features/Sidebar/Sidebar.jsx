import SidebarHeader from "./components/SidebarHeader";
import menus from "../../data/menus";
import Menus from "./components/Menus";

function Sidebar() {
  return (
    <>
      <div className="w-[172px]  z-10 bg-white h-screen sticky top-0 border-r p-6 border-emerald-300">
        <SidebarHeader />
        <Menus menus={menus} />
      </div>
    </>
  );
}

export default Sidebar;
