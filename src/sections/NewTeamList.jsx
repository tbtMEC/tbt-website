import React from "react";
import TeamMemberCard from "../components/teamMemberCard";
import teamMembers21 from "../teamMembers21.json";
import "../styles/newTeam.scss";

const TeamSection = () => {
  return (
    <div className="section" id="team">
      <div className="head">Our Team</div>
      <div
        className=""
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {teamMembers21.map((member) => (
          <TeamMemberCard member={member} />
        ))}
      </div>

      <div className="row">
        <div className="column">
          <div className="border">
            <img src="/assets/president.jpg" alt="president" />
            <p>
              Vishnumaya Unni<br></br>President
            </p>
          </div>
        </div>

        <div className="column">
          <div className="border">
            <img src="assets\vice president.png" alt="vice president" />
            <p>
              Sharat Jacob<br></br>Vice President
            </p>
          </div>
        </div>

        <div className="column">
          <div className="border">
            <img src="assets\secretary.jpg" alt="secretary" />
            <p>
              Hisham Hashir<br></br>Secretary
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <div className="border">
            <img src="assets\design head.jpg" alt="Design Head" />
            <p>
              Ashik K L<br></br>Design Head
            </p>
          </div>
        </div>

        <div className="column">
          <div className="border">
            <img src="assets\tech head.jpg" alt="Tech Lead" />
            <p>
              Aldrin Jenson<br></br>Tech Lead
            </p>
          </div>
        </div>

        <div className="column">
          <div className="border">
            <img src="assets\content head.jpg" alt="Content Head" />
            <p>
              N Sreelakshmi<br></br>Content Head
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <div className="border">
            <img
              src="assets\writers forum head.jpg"
              alt=" Writers forum head"
            />
            <p>
              N A Laila<br></br>Writer's Forum Head
            </p>
          </div>
        </div>

        <div className="column">
          <div className="border">
            <img
              src="assets\speakers forum head.jpg"
              alt="Speakers Forum Head"
            />
            <p>
              Pranav H Nair<br></br>Speaker's Forum Head
            </p>
          </div>
        </div>

        <div className="column">
          <div className="border">
            <img
              src="assets\readers forum head.jpeg"
              alt="Readers Forum Lead"
            />
            <p>
              Sneha Shaji<br></br>Reader's Forum Head
            </p>
          </div>
        </div>
      </div>

      <div className="scroll">
        <a href="#landing">
          <img src="assets\scroll.png" alt="^" />
        </a>
      </div>
    </div>
  );
};

export default TeamSection;
