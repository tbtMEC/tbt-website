import React from "react";
import teamMembers21 from "../teamMembers21.json";
import "../styles/newTeam.css";

const TeamSection = () => {
  const data=teamMembers21
  function makeCard(data) {
    return (
      <div key={data.designation} className="column">
        <div className="border">
          <div className="avatarBG">
            <div className="avatar">
              <img src={"teamMembers21Images/" + data.image} alt="image" />
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
      <div className="head">Core Team 2021</div>
      <div className="row">
        {data.slice(0, 1).map((item) => {
          return makeCard(item);
        })}
      </div>
      <div className="row">
        {data.slice(1, 4).map((item) => {
          return makeCard(item);
        })}
      </div>
      <div className="row">
        {data.slice(4, 7).map((item) => {
          return makeCard(item);
        })}
      </div>
      <div className="row">
        {data.slice(7, 11).map((item) => {
          return makeCard(item);
        })}
      </div>{" "}
    </div>
  );
};

export default TeamSection;
