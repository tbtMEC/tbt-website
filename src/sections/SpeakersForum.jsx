import "../styles/speakersForum.css";

const SpeakersForum = () => {
  return (
    <div
      className="section"
      id="speakersForum"
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <img
        src="/assets/Stars.png"
        alt="Stars as background"
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
      <div
        data-aos="fade"
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <div className="container2">
          <div data-aos="slide-left" className="container">
            <img
              className="mic"
              src="/assets/microphone-svgrepo-com 1.png"
              alt="mic"
            />
            <div id="head_speak" className="box-1">
              <h1>The Speakers Forum</h1>
            </div>
            <img
              className="pho_girl"
              src="/assets/Admire Framed Art Print by Vashti Harrison (1) 1.png"
              alt="Smiling Child"
            />
            <div id="speak_cont" className="box-2">
              <p>
                The speaker’s forum is where you can take a mic and step
                forward. From heated debates to poetry slams, you can work on
                your speaking skills while having fun at it. In this Round
                Table, polish and nourish the orator inside you.
              </p>
            </div>
            <div className="box-3">
              <img
                className="mic_pho"
                src="/assets/microphone-svgrepo-com 1.png"
                alt="mic"
              />
            </div>
          </div>

          {/* <div className=""> */}
          <img
            data-aos="slide-left"
            className="girl"
            src="/assets/Admire Framed Art Print by Vashti Harrison (1) 1.png"
            alt="Smiling Child"
          />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default SpeakersForum;
