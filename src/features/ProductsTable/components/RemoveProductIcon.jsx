import Modal from "../../../components/common/Modal";
import { HiOutlineTrash, HiOutlineExclamation } from "react-icons/hi";

const Trigger = () => (
  <button className="cursor-pointer" aria-label="Delete product">
    <HiOutlineTrash className="text-red-500 text-lg sm:text-xl" />
  </button>
);

function RemoveProductIcon({ product, handler }) {
  return (
    <Modal
      onSubmit={() => handler(product.id)}
      title="Delete Product"
      Trigger={<Trigger />}
    >
      <div className="relative space-y-5 text-center">
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-20"></div>
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-lg shadow-red-500/20">
              <HiOutlineTrash className="text-4xl sm:text-5xl text-red-500 animate-bounce" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-white font-semibold text-base sm:text-lg">
            Are you absolutely sure
            <span className="inline-block px-2 py-0.5 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 font-bold text-base sm:text-lg">
              {product?.title} {""}?
            </span>
          </h3>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            This action
            <span className="text-red-400 font-medium">cannot be undone</span>.
            This will permanently delete the product and remove all of its data
            from our servers.
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 p-3 bg-red-500/5 rounded-xl border border-red-500/20">
          <HiOutlineExclamation className="text-red-400 text-base sm:text-lg animate-pulse" />
          <span className="text-red-400 text-xs sm:text-sm font-medium">
            This action is irreversible
          </span>
        </div>
      </div>
    </Modal>
  );
}

export default RemoveProductIcon;
