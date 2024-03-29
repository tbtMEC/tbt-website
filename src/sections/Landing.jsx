import "../styles/landing.css";
import Fireflies from "../components/Fireflies";

const Landing = () => {
  return (
    <div className="section" id="landing">
      <Fireflies />
      <div style={{ textAlign: "center" }} id="text-content">
        <span data-aos="fade-up">
          <h1>Welcome to TBT</h1>

          <p> For flippers, scribblers and speakers </p>
        </span>
        <a href="https://discord.gg/eQ7GcZcPw5">
          <button
            data-aos="zoom-in"
            className="join-btn"
            target="_blank"
            rel="noreferrer"
          >
            Join Us
          </button>
        </a>
      </div>
    </div>
  );
};

export default Landing;
