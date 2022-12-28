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
  offset: 0,
  duration: 1300,
  easing: "ease-in-out-back",
  delay: 200,
  mirror: true,
});

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
