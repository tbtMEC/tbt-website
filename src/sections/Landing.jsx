import "../styles/landing.scss"; // css file for landing page
// import BgImage from "/assets/bg.png";

const Landing = () => {
  return (
    <div className="section" id="landing">
      <img
        src="/assets/bg.png"
        alt="Thick Forest image as background"
        width="100%"
        height="auto"
        className="bgImg"
      />

      {/* navbar start*/}
      <div>
        <nav>
          <ul>
            <li>
              <a href="#">test</a>
            </li>
            <li>
              <a href="#">test</a>
            </li>
            <li>
              <a href="#">test</a>
            </li>
            <li>
              <a href="#">test</a>
            </li>
          </ul>
        </nav>
      </div>
      {/* navbar end */}
      <div style={{ textAlign: "center" }} className="text-content">
        <h1>Welcome to TBT</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          dolore.
        </p>
        <button className="join-btn">Join Us</button>
      </div>
    </div>
  );
};

export default Landing;
