import "../styles/about.scss"; // css file for landing page

const About = () => {
  return (
    <div
      className="section"
      id="about"
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <img
        src="/assets/Stars.png"
        alt="Stars as background"
        width="100%"
        height="auto"
        className="Stars1"
      />
      <img
        src="/assets/Stars.png"
        alt="Stars as background"
        width="100%"
        height="auto"
        className="Stars2"
      />
      <img
        src="/assets/Stars.png"
        alt="Stars as background"
        width="100%"
        height="auto"
        className="Star1"
      />

      <div className="container">
        <div id="head_about" className="box-1-abo">
          <h1>About Us</h1>
        </div>
        <img
          className="gir_pho"
          src="/assets/Vashti Harrison on Twitter 1.png"
          alt="Dreaming child"
        />
        <div id="about_cont" className="box-2-abo">
          <p>
            Founded and run by passionate MECians, The Book Thieves is the
            literary club of Model Engineering College. It is a place for people
            to let their creativity run wild and express their thoughts and
            ideas freely. It is a haven for all those who love books, reading,
            and literature.
          </p>
        </div>
      </div>
      <div className="box-3-abo">
        <img
          className="girl"
          src="/assets/Vashti Harrison on Twitter 1.png"
          alt="Dreaming child"
        />
      </div>
    </div>
  );
};

export default About;
