import { Link } from "react-router-dom";

function SidebarHeader() {
  return (
    <>
      <div className="pb-6 border-b border-gray-300">
        <Link className="flex items-center gap-3">
          <img
            className="rounded-2xl size-7"
            src="./src/assets/images/Logo.jpg"
            alt="imageLogoViaX"
          />
          <span className="text-sm font-black! font-sans text-blue-950  ">
            Panel ViaX
          </span>
        </Link>
      </div>
    </>
  );
}

export default SidebarHeader;
