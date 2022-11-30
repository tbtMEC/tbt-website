import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "typeface-stoke";
import "typeface-poppins";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import VisionPage from "./pages/Vision";
import ErrorPage from "./pages/error-page";
import ReactAudioPlayer from "react-audio-player";
import MagicInTheAir from "./magicInTheAir.mp3";

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
    <ReactAudioPlayer src={MagicInTheAir} autoPlay={true} loop />
    <RouterProvider router={router}>{/* <App /> */}</RouterProvider>
  </React.StrictMode>
);
