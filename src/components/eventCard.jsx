import "./eventCard.css";

const EventCard = ({ event }) => {
  const {
    title = "",
    imagePath,
    url = "",
    description = "",
    tags = [],
  } = event;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: "none" }}
    >
      <div id="card">
        <img
          src={`eventImages/${imagePath}`}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 15,
          }}
          alt={title}
        />
        <div
          className="cardTitle flex space-between"
          style={{ paddingTop: "5px", margin: "5px" }}
        >
          <h3
            style={{
              fontFamily: "Stoke",
              color: "#f6f7d1",
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
              width: "fit-content",
            }}
          >
            {title}
          </h3>
          {/* <div className="flex viewPostBtn">
            <span
              style={{
                whiteSpace: "nowrap",
              }}
            >
              View Post
            </span>
          </div> */}
        </div>
        <span
          className="tag"
          style={{
            opacity: 0.7,
            textOverflow: "ellipsis",
            textAlign: "left",
            overflow: "hidden",
            width: "100%",
            whiteSpace: "nowrap",
            fontFamily: "sans-serif",
            justifyContent: "space-between",
            margin: "0px 10px",
            display: "flex",
          }}
        >
          {tags.length ? "#" + tags.join(", #") : ""}
        </span>
        <p
          style={{
            fontFamily: "Poppins",
            color: "#f6f7d1",
            margin: "0px 10px",
            paddingBottom:"2px",
          }}
          className="desc"
        >
          {description}
        </p>
      </div>
    </a>
  );
};

export default EventCard;
