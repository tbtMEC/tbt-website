import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

import "../styles/navbar.scss";
export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
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
      {(toggleMenu || screenWidth > 600) && (
        <ul className="list">
          <li className="items">
            <HashLink to="/#about">About</HashLink>
          </li>
          <li className="items">
            <HashLink to="/#readersForum">The Reader's Forum</HashLink>
          </li>
          <li className="items">
            <HashLink to="/#writersForum">The Writer's Forum</HashLink>
          </li>
          <li className="items">
            <HashLink to="/#speakersForum">The Speaker's Forum</HashLink>
          </li>
          <li className="items">
            <HashLink to="/#events">Events</HashLink>
          </li>
          <li className="items">
            <HashLink to="/#team">Team</HashLink>
          </li>
          <li className="items">
            <HashLink to="/vision">Vision</HashLink>
          </li>
        </ul>
      )}

      <button onClick={toggleNav} className="btnmenu">
        <img src="/assets/menu.png" alt="" />
      </button>
    </nav>
  );
}
