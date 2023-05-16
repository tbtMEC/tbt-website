import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "typeface-stoke";
import "typeface-poppins";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

// AOS.init()

AOS.init({
  offset: -100,
  duration: 500,
  easing: "ease-in-out-back",
  delay: 10,
  mirror: true,
  anchorPlacement: "top-center",
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
