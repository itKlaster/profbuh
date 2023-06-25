import { createBrowserRouter } from "react-router-dom";
import { Root } from "./root";
import { Article } from "./articale";
import { ArticleRoot } from "./articleRoot";
import { ArticleHtml } from "./article-html";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "article/:id",
    element: <ArticleRoot />,
    children: [
      { index: true, element: <Article /> },
      { path: "json", element: <Article /> },
      { path: "html", element: <ArticleHtml /> },
    ],
  },
]);
