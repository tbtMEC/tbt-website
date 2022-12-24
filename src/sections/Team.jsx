import React from "react";
// import TeamMemberCard from "../components/teamMemberCard";
import "../styles/team.scss";
import ScrollToTop from "../components/scroll";

const Team = () => {
  return (
    <div className="section" id="team">
      <div className="head">Our Team</div>

      <div className="row">
        <div className="column">
          <div className="border">
            <div className="avatarBG">
              <div className="avatar">
                <img src="teamMembers22Images\president.png" alt="president" />
              </div>
            </div>
            <p>
              Vishnumaya Unni<br></br>President
            </p>
          </div>
        </div>

        <div className="column">
          <div className="border">
            <div className="avatarBG">
              <div className="avatar">
                <img
                  src="teamMembers22Images\vice_president.png"
                  alt="vice president"
                />
              </div>
            </div>
            <p>
              Sharat Jacob<br></br>Vice President
            </p>
          </div>
        </div>

        <div className="column">
          <div className="border">
            <div className="avatarBG">
              <div className="avatar">
                <img src="teamMembers22Images/secretary.png" alt="secretary" />
              </div>
            </div>
            <p>
              Hisham Hashir<br></br>Secretary
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <div className="border">
            <div className="avatarBG">
              <div className="avatar">
                <img
                  src="teamMembers22Images/design_head.png"
                  alt="Design Head"
                />
              </div>
            </div>
            <p>
              Ashik K L<br></br>Design Head
            </p>
          </div>
        </div>

        <div className="column">
          <div className="border">
            <div className="avatarBG">
              <div className="avatar">
                <img src="teamMembers22Images/tech_head.png" alt="Tech Lead" />
              </div>
            </div>
            <p>
              Aldrin Jenson<br></br>Tech Lead
            </p>
          </div>
        </div>

        <div className="column">
          <div className="border">
            <div className="avatarBG">
              <div className="avatar">
                <img
                  src="teamMembers22Images/content_head.png"
                  alt="Content Head"
                />
              </div>
            </div>
            <p>
              N Sreelakshmi<br></br>Content Head
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <div className="border">
            <div className="avatarBG">
              <div className="avatar">
                <img
                  src="teamMembers22Images/writers_forum_head.png"
                  alt=" Writers forum head"
                />
              </div>
            </div>
            <p>
              N A Laila<br></br>Writer's Forum Head
            </p>
          </div>
        </div>

        <div className="column">
          <div className="border">
            <div className="avatarBG">
              <div className="avatar">
                <img
                  src="teamMembers22Images/speakers_forum_head.png"
                  alt="Speakers Forum Head"
                />
              </div>
            </div>
            <p>
              Pranav H Nair<br></br>Speaker's Forum Head
            </p>
          </div>
        </div>

        <div className="column">
          <div className="border">
            <div className="avatarBG">
              <div className="avatar">
                <img
                  src="teamMembers22Images/readers_forum_head.png"
                  alt="Readers Forum Lead"
                />
              </div>
            </div>
            <p>
              Sneha Shaji<br></br>Reader's Forum Head
            </p>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Team;
