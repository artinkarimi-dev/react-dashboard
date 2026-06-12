import { IoNotificationsOutline } from "react-icons/io5";

function Notifications() {
  return (
    <button
      className="
      ml-3
      group relative flex items-center justify-center
      w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11
      rounded-xl
      bg-green-50
      text-green-600
      shadow-sm
      border border-green-100
      transition-all duration-300
      hover:bg-green-100
      hover:text-green-700
      hover:shadow-md
      hover:scale-105
      active:scale-95
      cursor-pointer
      "
    >
      <IoNotificationsOutline className="text-lg sm:text-xl transition-transform duration-300 group-hover:rotate-6" />

      <span className="absolute top-1 right-1 sm:top-1.5 sm:right-1.5 flex h-2 w-2 sm:h-2.5 sm:w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-full w-full bg-green-500"></span>
      </span>
    </button>
  );
}

export default Notifications;
