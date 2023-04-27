import "../styles/writersForum.scss";

const WritersForum = () => {
  return (
    <div
      className="section"
      id="writersForum"
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <img
        src="/assets/Stars.png"
        alt="Stars1 as background"
        width="100%"
        height="auto"
        className="Stars2"
      />
      <img
        src="/assets/Stars.png"
        alt="Stars3 as background"
        width="100%"
        height="auto"
        className="Stars3"
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
        className="flex-col"
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div data-aos="slide-right" className="box-3">
          <img
            className="book"
            src="/assets/child-reading-sheets.png"
            alt="Child under sheet"
          />
        </div>
        {/* <div className=""> */}
        <div data-aos="slide-right" className="container">
          <div id="write_head" className="box-1">
            <img
              className="pen"
              src="/assets/pen-svgrepo-com 1.png"
              alt="pen"
            />
            <h1>The Writers Forum</h1>
          </div>
          <div
            className="img-wrapper"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              className="book_pho"
              src="/assets/child-reading-sheets.png"
              alt="Child under sheet"
            />
          </div>
          <div className="flex justify-center">
            <p id="textContent">
              The writer’s forum is a platform to develop writing skills in
              diverse fields and to share works with a bunch of like-minded
              people. This Scribble Room is a place to showcase the power of
              your pen.
            </p>
          </div>
          <img
            className="pen_pho"
            src="/assets/pen-svgrepo-com 1.png"
            alt="pen"
          />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default WritersForum;
