import React from "react";
import TeamMemberCard from "../components/teamMemberCard";
import teamMembers21 from "../teamMembers21.json";
import "../styles/newTeam.scss";
import { Link } from "react-router-dom";

const TeamSection = () => {
  const [
    firstMember,
    secondMember,
    thirdMember,
    fourthMember,
    ...otherMembers
  ] = teamMembers21;
  return (
    <div className="section" id="newTeam">
      <div className="head">Core Team 2021</div>

      <div className="flex wrap center">
        <TeamMemberCard member={firstMember} />
      </div>

      <div className="flexCenterRow">
        <TeamMemberCard member={secondMember} />
        <TeamMemberCard member={thirdMember} />
        <TeamMemberCard member={fourthMember} />
        <br />
      </div>

      <div className="flexCenterRow">
        {otherMembers.map((member) => (
          <TeamMemberCard member={member} />
        ))}
      </div>

      <div className="scroll">
        <Link to="/vision">
          <img src="assets\scroll.png" alt="^" />
        </Link>
      </div>
    </div>
  );
};

export default TeamSection;
