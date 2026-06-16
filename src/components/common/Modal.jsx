import { useState } from "react";
import ModalFooter from "./ModalFooter";

function Modal({ Trigger, children, title, onSubmit }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
        {Trigger}
      </div>

      {isOpen && (
        <div
          dir="rtl"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-[95%] sm:max-w-lg md:max-w-xl lg:max-w-2xl bg-gray-900 rounded-2xl border border-gray-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 sm:p-5 border-b border-gray-700">
              <h2 className="text-base sm:text-lg md:text-xl font-bold text-white">
                {title}
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 bg-gray-800 rounded-lg border border-gray-700 flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors"
              >
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-4 sm:p-5 md:p-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
              {children}
            </div>

            <ModalFooter
              onSubmit={onSubmit}
              onClose={() => setIsOpen(false)}
              falseButton={() => setIsOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
