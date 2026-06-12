import { BiShoppingBag } from "react-icons/bi";
import { HiDocumentText, HiUser } from "react-icons/hi";
import { RiAdminFill } from "react-icons/ri";

export const generateSummaries = ({
    productsLength = 0,
    usersLength = 0,
    ticketsLength = 0,
    adminsLength = 0,
}) => [
        { id: 1, title: "Total Products", value: productsLength, Icon: BiShoppingBag, color: "blue" },
        { id: 2, title: "Active Users", value: usersLength, Icon: HiUser, color: "indigo" },
        { id: 3, title: "Total Tickets", value: ticketsLength, Icon: HiDocumentText, color: "amber" },
        { id: 4, title: "Administrators", value: adminsLength, Icon: RiAdminFill, color: "rose" },
    ];


export const generateChartData = ({
    productsLength = 0,
    usersLength = 0,
    ticketsLength = 0,
    adminsLength = 0,
}) => {
    return [
        {
            name: "Products",
            value: productsLength,
        },
        {
            name: "Users",
            value: usersLength,
        },
        {
            name: "Admins",
            value: adminsLength,
        },
        {
            name: "Tickets",
            value: ticketsLength,
        },
    ]
}