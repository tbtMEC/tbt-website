import "../styles/readersForum.scss";

const ReadersForum = () => {
  return (
    <div className="section" id="readersForum">
      Readers Forum
      <div className="flexbox-item flexbox-1">
        <img src="/assets/smallbook.png" alt="book " width={"35px"} />
        <h2>The Readers Forum</h2>
      </div>
      <div>
        <img
          className=" flexbox-item flexbox-2"
          src="/assets/child-sitting-on-books.png"
          alt="reading"
        />
      </div>
      <div className="flexbox-item flexbox-3">
        <p>
          The readers forum is a place where we celebrate the art of reading, be
          it books, essays, or posters. In this Booked Corner, meet other
          readers and let your wings of imagination fly.
        </p>
      </div>
    </div>
  );
};

export default ReadersForum;
