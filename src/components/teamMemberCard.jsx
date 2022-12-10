const TeamMemberCard = ({ member }) => {
  const { name, designation, imagePath } = member;

  return (
    <div>
      <div
        className="column"
        // style={{
        //   margin: 10,
        // }}
      >
        <div className="border">
          <img
            src={`/teamMembers21Images/${imagePath}`}
            alt={designation}
            // style={{ width: "100%", height: "100%" }}
            // style={{ width: "24vw", height: "24vw" }}
          />
          <p style={{ fontWeight: "bold" }}>{name}</p>
          <p>{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
