import About from "../sections/About";
import Events from "../sections/Events";
import Footer from "../sections/Footer";
import Landing from "../sections/Landing";
import SpeakersForum from "../sections/SpeakersForum";
import Team from "../sections/Team";
import WritersForum from "../sections/WritersForum";
import ReadersForum from "../sections/ReadersForum";
import Navbar from "../sections/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Landing />
      <About />
      <ReadersForum />
      <WritersForum />
      <SpeakersForum />
      <Events />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
