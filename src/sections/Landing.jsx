import "../styles/landing.scss"; // css file for landing page
// import BgImage from "/assets/bg.png";
const Landing = () => {
  return (
    <div className="section" id="landing">
      <div className="logo-wrapper">
        <img src="/assets/OFFICIAL_LOGO1 1 (1).png" alt="logo" />
      </div>

      <img
        src="/assets/bg.png"
        alt="Thick Forest as background"
        width="100%"
        height="auto"
        className="bgImg"
      />

      <div style={{ textAlign: "center" }} className="text-content">
        <h1>Welcome to TBT</h1>

        <p> For flippers, scribblers and speakers </p>
        <button className="join-btn">
          <a href="https://discord.gg/eQ7GcZcPw5">Join Us</a>
        </button>
      </div>
    </div>
  );
};

export default Landing;
