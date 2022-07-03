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
      <div className="">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          consectetur consequatur neque beatae laborum accusamus ad, quis
          dolores ut nisi earum, tenetur ullam! Minima dignissimos debitis modi
          perspiciatis, nostrum accusantium?
        </p>
      </div>
      {/* <div className=""> */}
      <img
        src="/assets/child-reading-sheets.png"
        alt="Child reading under sheets"
      />
      {/* </div> */}
    </div>
  );
};

export default About;
