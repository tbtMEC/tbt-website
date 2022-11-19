const EventCard = ({ event }) => {
  const { title = "", imagePath, url = "", type = "" } = event;
  console.log(title);
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: "none" }}
    >
      <div
        style={{
          margin: "1 rem",
          padding: 10,
          cursor: "pointer",
        }}
      >
        <img
          src={`eventImages/${imagePath}`}
          style={{
            width: "100%",
            height: "100%",
          }}
          alt={title}
        />
        <h3>{title}</h3>
      </div>
    </a>
  );
};

export default EventCard;
