import { createBrowserRouter } from "react-router-dom";

import { Layout } from "@/pages/Layout/Layout";
import { Home } from "@/pages/Home/Home";
import { Cars } from "@/pages/Cars/Cars";
import { Car } from "@/pages/Car/Car";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "cars",
        element: <Cars />,
      },
      {
        path: "cars/:carId",
        element: <Car />,
      },
    ],
  },
]);
