import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Book from "./pages/Book";
import Home from "./pages/Home";
import Saved from "./pages/Saved";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/book/:bookId",
    element: <Book></Book>,
  },
  {
    path: "/saved",
    element: <Saved></Saved>,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  //<React.StrictMode>
  <RouterProvider router={router} />
  //</React.StrictMode>,
);
