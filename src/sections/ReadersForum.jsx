import "../styles/readersForum.scss";

const ReadersForum = () => {
  return (
    <div className="section" id="readersForum">
      <img
        src="/assets/readstars.png"
        alt="stars"
        width="100%"
        height="auto"
        className="Stars"
      />
      <img
        src="/assets/readstar.png"
        alt="stars"
        width="100%"
        height="auto"
        className="stars"
      />
      <div
        data-aos="fade"
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          height: "100vh",
        }}
      >
        <div data-aos="slide-right" className=" img1">
          <img
            className=" child"
            src="/assets/child-sitting-on-books.png"
            alt="reading"
          />
        </div>
        <div data-aos="slide-right" className="container">
          <div className="flexbox-1">
            <img
              className="book"
              src="/assets/smallbook.png"
              alt="book"
              height="66.19px"
              width="100px"
            />
            <h1 className="head">The Readers Forum</h1>
          </div>
          <div className="img2">
            <img
              className=" child"
              src="/assets/child-sitting-on-books.png"
              alt="reading"
            />
          </div>
          <div className="flexbox-3">
            <p>
              The reader’s forum is a place where we celebrate the art of
              reading, be it books, essays, catalogues, or posters. In this
              Booked Corner, meet other readers and let your wings of
              imagination fly.
            </p>
            <img
              className="book1"
              src="/assets/smallbook.png"
              alt="book"
              height="80vh"
              width="80vh"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadersForum;
