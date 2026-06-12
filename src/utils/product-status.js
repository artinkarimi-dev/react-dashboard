import clsx from "clsx";

const getStatusIndicatorClass = (isPublished) =>
    clsx(
        "w-2 h-2 rounded-full",
        isPublished ? "bg-emerald-500" : "bg-rose-500",
    );

export default getStatusIndicatorClass;