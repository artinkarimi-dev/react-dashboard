export default function ModalFooter({ onSubmit, onClose }) {
  return (
    <div className="flex gap-3 p-4 border-t border-gray-700">
      <button
        className="flex-1 bg-blue-600 text-white text-center py-2.5 rounded-xl hover:bg-blue-700 transition"
        onClick={onSubmit}
      >
        Apply
      </button>

      <button
        className="flex-1 bg-gray-800 border border-gray-700 text-gray-300 text-center py-2.5 rounded-xl hover:bg-gray-700 transition"
        onClick={onClose}
      >
        Cancel
      </button>
    </div>
  );
}
