import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import VisionPage from "./pages/Vision";
import ErrorPage from "./pages/error-page";
import MagicInTheAir from "./magicInTheAir.mp3";
import { useRef } from "react";
import { Route } from "react-router-dom";
import Navbar from "./sections/Navbar";
import { useState } from "react";

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

const App = () => {
  const audioRef = useRef(null);
  const [sidebarActive, setSidebarActive] = useState(false);

  const playSong = () => {
    audioRef.current?.play();
  };

  return (
    <>
      <audio src={MagicInTheAir} loop autoPlay ref={audioRef} />
      <div className="App" onClick={playSong}>
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
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
