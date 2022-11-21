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
      <div
        style={{
          cursor: "pointer",
          backgroundColor: "white",
          paddingBottom: 20,
          padding: 10,
          margin: 20,
          marginBottom: 70,
        }}
      >
        <img
          src={`eventImages/${imagePath}`}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 15,
          }}
          alt={title}
        />
        <div className="flex space-between">
          <h3
            style={{
              fontFamily: "Stoke",
              color: "#53171b",
            }}
          >
            {title}
          </h3>
          <div className="viewPostBtn" style={{}}>
            View Post
          </div>
        </div>
        <span style={{ opacity: 0.7 }}>
          {tags.length ? "#" + tags.join(", #") : ""}
        </span>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default EventCard;
