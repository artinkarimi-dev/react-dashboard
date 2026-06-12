import { v4 as uuidv4 } from "uuid";
import { FaHome, FaShoppingCart, FaUsers, FaComments, FaCommentDots } from "react-icons/fa";

export default [
    {
        id: uuidv4(),
        title: "Main Menu",
        items: [
            {
                id: uuidv4(),
                title: "Dashboard",
                href: "/",
                icon: FaHome,
            },
            {
                id: uuidv4(),
                title: "Shopping Cart",
                href: "/products",
                icon: FaShoppingCart,
            },
            {
                id: uuidv4(),
                title: "Users",
                href: "/users",
                icon: FaUsers,
            },
            {
                id: uuidv4(),
                title: "Tickets",
                href: "/tickets",
                icon: FaComments,
            },
            {
                id: uuidv4(),
                title: "Comments",
                href: "/comments",
                icon: FaCommentDots,
            },
        ],
    },
];
