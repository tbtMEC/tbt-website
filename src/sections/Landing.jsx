import "../styles/landing.scss"; // css file for landing page
// import BgImage from "/assets/bg.png";
const Landing = () => {
  return (
    <div className="section" id="landing">
    <img
      src="/assets/bg.png"
      alt="Thick Forest image as background"
      width="100%"
      height="100%"
      className="bgImg"
    />
  
            {/* navbar start*/}
      
      {/* navbar end */}
      <div style={{ textAlign: "center" }} className="text-content">
        <h1>Welcome to TBT</h1>
        <p>
        For flippers, scribblers and tripsters 
        </p>
        <button className="join-btn">Join Us</button>
      </div>
    </div>
  );
};

export default Landing;

