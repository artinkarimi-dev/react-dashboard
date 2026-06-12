import SearchInput from "./components/SearchInput";
import Notifications from "./components/Notifications";
import Divider from "./components/Divider";
import Profile from "./components/Profile";

function Topbar({ onMenuClick }) {
  return (
    <div className="w-full h-20 z-10 relative border-b border-gray-300 flex items-center justify-between px-4 md:px-6">
      <div className="flex items-center gap-3 md:gap-5">
        <button
          onClick={onMenuClick}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border bg-white shadow-sm"
        >
          ☰
        </button>

        <SearchInput />
      </div>

      <div className="flex items-center gap-3 md:gap-5">
        <Notifications />
        <Divider />
        <Profile />
      </div>
    </div>
  );
}

export default Topbar;
