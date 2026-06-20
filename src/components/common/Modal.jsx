import { useCallback } from "react";
import ModalFooter from "./ModalFooter";
import useToggle from "../../hooks/useToggle";

function Modal({
  Trigger,
  children,
  title,
  onSubmit,
  isOpen: externalIsOpen,
  onClose: externalOnClose,
}) {
  const [internalIsOpen, toggle] = useToggle();

  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;

  const onClose = externalOnClose || toggle;

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  const handleSubmit = useCallback(() => {
    onSubmit?.();
    onClose();
  }, [onSubmit, onClose]);

  const TriggerElement = Trigger ? (
    <div onClick={toggle} className="cursor-pointer">
      {Trigger}
    </div>
  ) : null;

  return (
    <>
      {TriggerElement}

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={handleClose}
        >
          <div
            className="w-full max-w-2xl bg-gray-900 rounded-2xl border border-gray-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h2 className="text-white font-bold text-lg">{title}</h2>

              <button onClick={handleClose} className="text-gray-400">
                ✕
              </button>
            </div>

            <div className="p-5 max-h-[70vh] overflow-y-auto">{children}</div>

            <ModalFooter onSubmit={handleSubmit} onClose={handleClose} />
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
