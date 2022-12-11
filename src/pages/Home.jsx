import About from "../sections/About";
import Events from "../sections/Events";
import Footer from "../sections/Footer";
import Landing from "../sections/Landing";
import SpeakersForum from "../sections/SpeakersForum";
import Team from "../sections/Team";
import WritersForum from "../sections/WritersForum";
import ReadersForum from "../sections/ReadersForum";

const Home = () => {
  return (
    <div>
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
