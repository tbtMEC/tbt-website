import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "typeface-stoke";
import "typeface-poppins";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import VisionPage from "./pages/Vision";
import ErrorPage from "./pages/error-page";
const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "vision",
    element: <VisionPage />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
