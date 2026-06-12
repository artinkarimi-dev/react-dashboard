import SearchInput from "./components/SearchInput";
import Notifications from "./components/Notifications";
import Divider from "./components/Divider";
import Profile from "./components/Profile";

function Topbar() {
  return (
    <>
      <div className="w-full h-20 z-10 relative border-b border-gray-300 flex items-center justify-between *:flex *:items-center *:gap-5 *:px-6">
        <div>
          <SearchInput />
        </div>
        <div className="">
          <Notifications />
          <Divider />
          <Profile />
        </div>
      </div>
    </>
  );
}

export default Topbar;
