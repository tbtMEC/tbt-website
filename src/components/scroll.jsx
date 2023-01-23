import  { useState, useEffect } from "react";
import "./scroll.scss";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="scroll">
      {" "}
      {showTopBtn && (
          <img
            src="assets\scroll.png"
            alt="^"
            className="scrollAni"
            onClick={goToTop}
          />
      )}{" "}
    </div>
  );
};
export default ScrollToTop;
