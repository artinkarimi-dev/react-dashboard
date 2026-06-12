import Modal from "../../../components/common/Modal";
import { BiEdit } from "react-icons/bi";

const Trigger = () => (
  <button className="cursor-pointer text-lg text-green-500">
    <BiEdit className="text-lg sm:text-xl transition-transform duration-300 group-hover:rotate-6" />
  </button>
);

function EditProductIcon() {
  return <Modal title="Change Product Details" Trigger={<Trigger />}></Modal>;
}

export default EditProductIcon;
