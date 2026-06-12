import clsx from "clsx";
import { NavLink } from "react-router-dom";

function Menus({ menus }) {
  return (
    <div className="">
      {menus.map((menu) => (
        <div key={menu.id}>
          <div className="flex items-center gap-2 py-3">
            <span className="bg-green-400 rounded-[100%] w-2 h-2"></span>
            <p className="text-sm font-light">{menu.title} :</p>
          </div>

          <div className="flex flex-col gap-3 py-2 text-sm">
            {menu.items.map((nav) => (
              <div
                key={nav.id}
                className="transition duration-300 ease-in-out hover:bg-gray-200 p-2 rounded-md w-full sm:w-auto"
              >
                <NavLink
                  to={nav.href}
                  className={({ isActive }) =>
                    clsx(
                      isActive
                        ? "flex items-center gap-2 w-full sm:w-32 relative before:absolute before:w-1 before:h-full before:rounded-r-full before:bg-blue-500 before:-left-6 *:[svg]:text-teal-600"
                        : "flex items-center gap-2 w-full sm:w-32",
                    )
                  }
                >
                  <nav.icon />
                  <span>{nav.title}</span>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menus;
