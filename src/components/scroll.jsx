import  React from "react";
import "./scroll.scss";

const ScrollToTop = () => {
  
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  return (
    <div className="scroll">
      {" "}
      { 
          <img
            src="assets\scroll.png"
            alt="^"
            className="scrollAni"
            onClick={goToTop}
          />
      }{" "}
    </div>
  );
};
export default ScrollToTop;
