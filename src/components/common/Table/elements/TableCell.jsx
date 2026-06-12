import clsx from "clsx";

function TableCell({ children , className }) {
  return <div className={clsx(className , "line-clamp-1")}>{children}</div>;
}

export default TableCell;