import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Category from "../pages/Category";
import Home from "../pages/Home";
import News from "../pages/News";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category/:id",
        element: <Category />,
      },
      {
        path: "/news/:id",
        element: <News />,
      },
    ],
  },
]);

export default router;
