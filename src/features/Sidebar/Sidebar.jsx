import SidebarHeader from "./components/SidebarHeader";
import menus from "../../data/menus";
import Menus from "./components/Menus";

function Sidebar({ open, setOpen }) {
  return (
    <>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 md:hidden z-[999]"
        />
      )}

      <aside
        className={`
          fixed top-0 left-0
        h-screen
        w-[240px] md:w-[230px]
        bg-white border-r border-emerald-300
        flex flex-col
        z-[1000]
        overflow-y-auto

          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <div className="p-4 md:p-6">
          <SidebarHeader />
        </div>

        <div className="flex-1 px-4 md:px-6">
          <Menus menus={menus} onClose={() => setOpen(false)} />
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
