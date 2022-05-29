import React from "react";
import "../styles/landing.scss"; // css file for landing page

const Landing = () => {
  return (
    <div className='landing'>
      {/* navbar start*/}
      <div>
        <nav>
          <ul>
            <li>
              <a href='#'>test</a>
            </li>
            <li>
              <a href='#'>test</a>
            </li>
            <li>
              <a href='#'>test</a>
            </li>
            <li>
              <a href='#'>test</a>
            </li>
          </ul>
        </nav>
      </div>
      {/* navbar end */}

      <div style={{ textAlign: "center" }} className='landing-main'>
        <h1>Welcome to TBT</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          dolore.
        </p>
        <button className='join-btn'>Join Us</button>
      </div>
    </div>
  );
};

export default Landing;
