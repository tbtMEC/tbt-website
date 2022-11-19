const EventCard = ({ event }) => {
  const { title = "", imagePath, url = "", type = "" } = event;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      // style={{ textDecoration: "none" }}
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
          }}
          alt={title}
        />
        <h3
          style={{
            fontFamily: "Stoke",
            color: "#53171b",
          }}
        >
          {title}
        </h3>
      </div>
    </a>
  );
};

export default EventCard;
