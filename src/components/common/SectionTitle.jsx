import { useState } from "react";

function SectionTitle({ title, Buttons }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div dir="ltr">
      <div className="flex items-center justify-between px-4 py-3 sm:px-6">
        <h2 className="text-xl sm:text-2xl font-bold font-sans">{title}</h2>

        <div className="hidden sm:flex items-center gap-3">{Buttons}</div>

        <button
          className="sm:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="sm:hidden flex flex-col gap-3 px-4 pb-4 border-t border-gray-200">
          {Buttons}
        </div>
      )}
    </div>
  );
}

export default SectionTitle;
