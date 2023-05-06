import About from "../sections/About";
import Events from "../sections/Events";
import Footer from "../sections/Footer";
import Landing from "../sections/Landing";
import SpeakersForum from "../sections/SpeakersForum";
import Team from "../sections/Team";
import WritersForum from "../sections/WritersForum";
import ReadersForum from "../sections/ReadersForum";
import "../styles/loader.css";

const Home = () => {
  function loaded(){
    const loader=document.getElementById("loader")
    loader.style.display="none"
  }
  return (
    <>
      <div id="loader" className="loading">
        <div className="loader book">
          <figure className="page"></figure>
          <figure className="page"></figure>
          <figure className="page"></figure>
        </div>
      </div>
      <div onLoad={loaded}>
        <Landing />
        <About />
        <ReadersForum />
        <SpeakersForum />
        <WritersForum />
        <Events />
        <Team />
        <Footer />
      </div>
    </>
  );
};

export default Home;
