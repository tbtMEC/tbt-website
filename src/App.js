import { BrowserRouter, createBrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import VisionPage from "./pages/Vision";
import ErrorPage from "./pages/error-page";
import MagicInTheAir from "./magicInTheAir.mp3";
import { useRef } from "react";
import { Route } from "react-router-dom";
import Navbar from "./sections/Navbar";
import { useState } from "react";
import FourNotFour from "./pages/FourNotFour";

const App = () => {
  const audioRef = useRef(null);
  const [sidebarActive, setSidebarActive] = useState(false);

  const playSong = () => {
    audioRef.current?.play();
  };

  return (
    <>
      <audio src={MagicInTheAir} loop autoPlay ref={audioRef} />
      <div className="" onClick={playSong}>
        <BrowserRouter>
          <Navbar
            sidebarActive={sidebarActive}
            setSidebarActive={setSidebarActive}
          />
          <Routes>
            <Route exact path="/" element={sidebarActive ? null : <Home />} />
            <Route
              path="/vision"
              element={sidebarActive ? null : <VisionPage />}
            />
            <Route path="*" element={sidebarActive ? null : <FourNotFour />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
