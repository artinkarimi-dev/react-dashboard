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
          dir="ltr"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-[90%] sm:max-w-md bg-gray-900 rounded-2xl border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h2 className="text-lg sm:text-xl font-bold text-white">
                {title}
              </h2>
              <div
                className="w-7 h-7 bg-gray-800 rounded-lg border border-gray-700 flex items-center justify-center cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <svg
                  className="w-4 h-4 text-gray-500"
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
              </div>
            </div>

            <div className="p-4">{children}</div>

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
