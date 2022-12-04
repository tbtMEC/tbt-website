import "../styles/landing.scss";

// todo: Add stars in this section
const Landing = () => {
  return (
    <div className="section" id="landing">
      <div style={{ textAlign: "center" }} id="text-content">
        <h1>Welcome to TBT</h1>

        <p> For flippers, scribblers and speakers </p>
        <button className="join-btn">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://discord.gg/eQ7GcZcPw5"
          >
            Join Us
          </a>
        </button>
      </div>
    </div>
  );
};

export default Landing;
