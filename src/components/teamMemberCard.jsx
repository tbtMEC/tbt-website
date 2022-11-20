const TeamMemberCard = ({ member }) => {
  const { name, designation, imagePath } = member;

  return (
    <div>
      <div
        className="column"
        style={{
          marginBottom: 30,
        }}
      >
        <div className="border">
          <img
            src={`/teamMembers21Images/${imagePath}`}
            alt={designation}
            style={{ width: "100%", height: "100%" }}
          />
          <p style={{ fontWeight: "bold" }}>{name}</p>
          <p>{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
