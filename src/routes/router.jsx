import { createBrowserRouter } from "react-router-dom";
import { Root } from "./root";
import { Article } from "./articale";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "article/:id",
    element: <Article />,
  },
]);
