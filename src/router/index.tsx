import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { BinaryToDecimal } from "../features/bin2dec";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "tools/bin2dec",
        element: <BinaryToDecimal />,
      },
    ],
  },
]);

export default router;
