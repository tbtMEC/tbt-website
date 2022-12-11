import "./eventCard.scss";

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
            className="cardTitle flex space-between">
          <h3
            style={{
              fontFamily: "Stoke",
              color: "#53171b",
              textOverflow: "ellipsis",
              width: "fit-content",
              overflow: "hidden",
              whiteSpace: "nowrap"
            }}
          >
            {title}
          </h3>
          <div className="viewPostBtn">View Post</div>
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
            display: "flex",
          }}
        >
          {tags.length ? "#" + tags.join(", #") : ""}
        </span>
        <p
          style={{
            fontFamily: "Poppins",
            color: "#53171b",
            
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
