import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import "../styles/navbar.scss";

export default function Navbar({ sidebarActive, setSidebarActive }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setSidebarActive((currState) => !currState);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      {!sidebarActive ? (
        <div className="logo-wrapper">
          <HashLink to="/">
            <img src="tbtLogo.png" alt="tbt logo" />
          </HashLink>
        </div>
      ) : null}

      {(sidebarActive || screenWidth > 992) && (
        <ul className="list">
          <li className="items">
            <HashLink onClick={() => setSidebarActive(false)} to="/#about">
              About
            </HashLink>
          </li>
          <li className="items">
            <HashLink
              onClick={() => setSidebarActive(false)}
              to="/#readersForum"
            >
              The Reader's Forum
            </HashLink>
          </li>
          <li className="items">
            <HashLink
              onClick={() => setSidebarActive(false)}
              to="/#writersForum"
            >
              The Writer's Forum
            </HashLink>
          </li>
          <li className="items">
            <HashLink
              onClick={() => setSidebarActive(false)}
              to="/#speakersForum"
            >
              The Speaker's Forum
            </HashLink>
          </li>
          <li className="items">
            <HashLink onClick={() => setSidebarActive(false)} to="/#events">
              Events
            </HashLink>
          </li>
          <li className="items">
            <HashLink onClick={() => setSidebarActive(false)} to="/#team">
              Team
            </HashLink>
          </li>
          <li className="items">
            <HashLink onClick={() => setSidebarActive(false)} to="/vision">
              Vision
            </HashLink>
          </li>
        </ul>
      )}

      <button onClick={toggleNav} className="btnmenu">
        <img src="/assets/menu.png" alt="" /> {""}
      </button>
    </nav>
  );
}
