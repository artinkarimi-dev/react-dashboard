import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/page";
import Users from "../pages/Users/page";
import Tickets from "../pages/Tickets/page";
import TicketDetails from "../pages/TicketDetails/page";
import Products from "../pages/Products/page";
import Comments from "../pages/Comments/page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "tickets",
        element: <Tickets />,
      },
      {
        path: "Tickets/:TicketDetails",
        element: <TicketDetails />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "comments",
        element: <Comments />,
      },
    ],
  },
]);
