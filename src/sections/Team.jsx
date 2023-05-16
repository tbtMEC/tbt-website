import React from "react";
// import TeamMemberCard from "../components/teamMemberCard";
import "../styles/team.css";
import ScrollToTop from "../components/scroll";
import teamMembers2023 from "./teamMembers2023.json";
const Team = () => {
  const data = teamMembers2023;
  function makeCard(data) {
    return (
      <div key={data.designation} className="column">
        <div className="border">
          <div className="avatarBG">
            <div className="avatar">
              <img src={"teamMembers23Images/" + data.image} alt="image" />
            </div>
          </div>
          <p>
            {data.name}
            <br></br>
            {data.designation}
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="section" id="team">
      <div className="head">Our Team</div>

      <div className="row">
        {data.slice(0, 3).map((item) => {
          return makeCard(item);
        })}
      </div>
      <div className="row">
        {data.slice(3, 6).map((item) => {
          return makeCard(item);
        })}
      </div>
      <div className="row">
        {data.slice(6, 8).map((item) => {
          return makeCard(item);
        })}
      </div>
      <div className="row">
        {data.slice(8, 11).map((item) => {
          return makeCard(item);
        })}
      </div>

      <ScrollToTop />
    </div>
  );
};

export default Team;
