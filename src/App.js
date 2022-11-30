import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import VisionPage from "./pages/Vision";
import ErrorPage from "./pages/error-page";
import MagicInTheAir from "./magicInTheAir.mp3";
import { useRef } from "react";

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

  const playSong = () => {
    audioRef.current?.play();
  };

  return (
    <div className="App" onTouchStart={playSong}>
      <audio src={MagicInTheAir} loop autoPlay ref={audioRef} />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
