import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Category from "../pages/Category";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import News from "../pages/News";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category/:id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news-category/${params.id}`),
      },
      {
        path: "/news/:id",
        element: <News />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
    ],
  },
]);

export default router;
