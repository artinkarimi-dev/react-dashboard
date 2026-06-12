import Modal from "../../../components/common/Modal";
import { HiEye, HiOutlineGlobeAlt, HiOutlineLockClosed } from "react-icons/hi";
import clsx from "clsx";

const Trigger = () => (
  <button className="group cursor-pointer text-sky-500">
    <HiEye className="text-lg sm:text-xl transition-transform duration-300 group-hover:rotate-6" />
  </button>
);

function ChangeVisibilityIcon({ product, handler }) {
  const isPublished = product?.isPublished;

  const boxClass = clsx(
    "relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl flex items-center justify-center shadow-lg transition-all duration-300 border",
    isPublished
      ? "bg-emerald-500/10 border-emerald-500/20 shadow-emerald-500/20"
      : "bg-gray-800/60 border-gray-700 shadow-black/40",
  );

  const statusBadgeClass = clsx(
    "ml-2 px-2 py-1 rounded-lg text-sm sm:text-base border",
    isPublished
      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
      : "bg-gray-700/40 text-gray-300 border-gray-600",
  );

  return (
    <Modal
      title="Change Publication Status"
      Trigger={<Trigger />}
      onSubmit={() => handler(product.id)}
    >
      <div className="space-y-6 text-center">
        <div className="flex justify-center">
          <div className={boxClass}>
            <div
              className={clsx(
                "absolute inset-0 rounded-3xl blur-xl opacity-40",
                isPublished ? "bg-emerald-500" : "bg-gray-600",
              )}
            />

            {isPublished ? (
              <HiOutlineGlobeAlt className="text-4xl sm:text-5xl text-emerald-400 relative z-10" />
            ) : (
              <HiOutlineLockClosed className="text-4xl sm:text-5xl text-gray-400 relative z-10" />
            )}
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-white font-semibold text-base sm:text-lg">
            Current status:
            <span className={statusBadgeClass}>
              {isPublished ? "Public" : "Private"}
            </span>
          </h3>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            By confirming, this product will be switched to
            <span className="text-white font-medium">
              {isPublished ? "Private" : "Public"}
            </span>
            mode.
          </p>
        </div>

        <div
          className={clsx(
            "flex items-center justify-between p-4 rounded-2xl border transition-all duration-300",
            isPublished
              ? "bg-gray-800/40 border-gray-700"
              : "bg-emerald-500/5 border-emerald-500/20",
          )}
        >
          <span className="text-sm text-gray-300">After change</span>

          <span
            className={clsx(
              "px-3 py-1 rounded-lg text-sm font-medium border",
              isPublished
                ? "bg-gray-700 text-gray-300 border-gray-600"
                : "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
            )}
          >
            {isPublished ? "Private" : "Public"}
          </span>
        </div>

        <div className="text-xs sm:text-sm text-gray-500">
          This action will immediately update visibility for all users.
        </div>
      </div>
    </Modal>
  );
}

export default ChangeVisibilityIcon;
