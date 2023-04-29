import { BrowserRouter, Routes } from "react-router-dom";
import { RxSpeakerLoud, RxSpeakerOff } from "react-icons/rx";
import Home from "./pages/Home";
import VisionPage from "./pages/Vision";
import MagicInTheAir from "./magicInTheAir.mp3";
import { useRef } from "react";
import { Route } from "react-router-dom";
import Navbar from "./sections/Navbar";
import { useState } from "react";
import FourNotFour from "./pages/FourNotFour";
import "./styles/app.scss";
/* import Cursor from "./components/customCursor"; */

const App = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);

  // const playSong = () => {
  //   // to start autoplay the first time only in mobile browsers
  //   const audioEl = audioRef?.current;
  //   if (isFirstRenderRef.current) {
  //     audioRef.current?.play();
  //     setIsPlaying(setIsPlaying(audioEl.currentTime > 0 && !audioEl.paused));
  //     isFirstRenderRef.current = false;
  //   }
  // };

  const togglePlaySong = () => {
    if (isPlaying) {
      setIsPlaying(false);
      audioRef.current?.pause();
    } else {
      setIsPlaying(true);
      audioRef.current?.play();
    }
  };

  return (
    <div className="app">
      {/* <Cursor /> */}
      <audio src={MagicInTheAir} loop ref={audioRef} />
      <div className="">
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

      {sidebarActive ? null : (
        <div id="speakerIcon">
          {isPlaying ? (
            <RxSpeakerLoud onClick={togglePlaySong} />
          ) : (
            <RxSpeakerOff onClick={togglePlaySong} />
          )}
        </div>
      )}
    </div>
  );
};

export default App;
