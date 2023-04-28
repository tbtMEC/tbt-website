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
  if (sidebarActive && screenWidth > 992) {
    setSidebarActive(false);
  }
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
        <div className="list">
          <div className="dropdown">
            <button className="dropbtn" href="/">
              <HashLink onClick={() => setSidebarActive(false)} to="/">
                Home
              </HashLink>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-caret-down-fill"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />{" "}
              </svg>
            </button>
            <div className="dropdown-content">
              <div className="items">
                <HashLink onClick={() => setSidebarActive(false)} to="/#about">
                  About
                </HashLink>
              </div>
              <div className="items">
                <HashLink
                  onClick={() => setSidebarActive(false)}
                  to="/#readersForum"
                >
                  The Reader's Forum
                </HashLink>
              </div>
              <div className="items">
                <HashLink
                  onClick={() => setSidebarActive(false)}
                  to="/#speakersForum"
                >
                  The Speaker's Forum
                </HashLink>
              </div>
              <div className="items">
                <HashLink
                  onClick={() => setSidebarActive(false)}
                  to="/#writersForum"
                >
                  The Writer's Forum
                </HashLink>
              </div>
              <div className="items">
                <HashLink onClick={() => setSidebarActive(false)} to="/#events">
                  Major Initiatives
                </HashLink>
              </div>
              <div className="items">
                <HashLink onClick={() => setSidebarActive(false)} to="/#team">
                  Core Team
                </HashLink>
              </div>
            </div>
          </div>
          <div className="items">
            <HashLink onClick={() => setSidebarActive(false)} to="/vision">
              Vision
            </HashLink>
          </div>
          <div className="items">
            <a
              onClick={() => setSidebarActive(false)}
              href="https://event-bridge-alpha.vercel.app/"
            >
              Events
            </a>
          </div>
          <div className="items">
            <a
              onClick={() => setSidebarActive(false)}
              href="https://tbt-book-exchange.netlify.app/"
            >
              Book Exchange
            </a>
          </div>
        </div>
      )}

      <button onClick={toggleNav} className="btnmenu">
        <img src="/assets/menu.png" alt="" /> {""}
      </button>
    </nav>
  );
}
