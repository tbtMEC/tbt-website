import React, { useState, useEffect, useRef } from "react";
import { HashLink } from "react-router-hash-link";
import "../styles/navbar.css";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

export default function Navbar({ sidebarActive, setSidebarActive }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setSidebarActive((currState) => !currState);
  };

  useEffect(() => {
    let input = document.getElementById("openMenu");
    input.checked = sidebarActive;
  }, [sidebarActive]);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    if (sidebarActive && screenWidth > 992) {
      setSidebarActive(false);
    }

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, [screenWidth]);

  const sidebar =
    screenWidth > 992
      ? {
          open: {
            transition: {
              duration: 0.4,
              transform: {
                type: "spring",
                stiffness: 300,
                restDelta: 10,
              },
              ease: "easeIn",
              staggerChildren: 0.05,
            },
            opacity: 1,
          },
          closed: {
            transition: {
              duration: 0.4,
              transform: {
                delay: 0.3,
                type: "spring",
                stiffness: 400,
                damping: 40,
              },
              ease: "easeOut",
              staggerChildren: 0.05,
            },
            opacity: 0,
            backgroundImage: "none",
          },
        }
      : {
          open: {
            transform: "translate3d(0, 0%, 0)",
            transition: {
              duration: 0.2,
              transform: {
                type: "spring",
                stiffness: 100,
                damping: 18,
              },
              ease: "easeIn",
              staggerChildren: 0.05,
            },
            opacity: 1,
          },
          closed: {
            transform: "translate3d(0, -100%, 0)",
            transition: {
              duration: 0.4,
              transform: {
                delay: 0.1,
                type: "spring",
                stiffness: 40,
                damping: 10,
              },
              opacity: { delay: 0.2 },
              ease: "easeOut",
              staggerChildren: 0.05,
            },
            opacity: 0,
            backgroundImage: "none",
          },
        };

  return (
    <nav active={sidebarActive.toString()}>
      {!sidebarActive ? (
        <div className="logo-wrapper">
          <HashLink to="/">
            <img src="tbtLogo.png" alt="tbt logo" />
          </HashLink>
        </div>
      ) : null}
      <div className="nav-wrapper">
        <AnimatePresence mode="popLayout">
          {(sidebarActive || screenWidth > 992) && (
            <motion.div
              className="list"
              animate={"open"}
              exit={"closed"}
              variants={sidebar}
              initial={"closed"}
            >
              <motion.div
                layout
                className="dropdown"
                variants={sidebar}
                key={1}
              >
                <motion.button className="dropbtn" href="/">
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
                </motion.button>
                <motion.div className="dropdown-content">
                  <div className="items" key={11}>
                    <HashLink
                      onClick={() => setSidebarActive(false)}
                      to="/#about"
                    >
                      About
                    </HashLink>
                  </div>
                  <div className="items" key={12}>
                    <HashLink
                      onClick={() => setSidebarActive(false)}
                      to="/#readersForum"
                    >
                      The Reader's Forum
                    </HashLink>
                  </div>
                  <div className="items" key={13}>
                    <HashLink
                      onClick={() => setSidebarActive(false)}
                      to="/#speakersForum"
                    >
                      The Speaker's Forum
                    </HashLink>
                  </div>
                  <div className="items" key={14}>
                    <HashLink
                      onClick={() => setSidebarActive(false)}
                      to="/#writersForum"
                    >
                      The Writer's Forum
                    </HashLink>
                  </div>
                  <div className="items" key={15}>
                    <HashLink
                      onClick={() => setSidebarActive(false)}
                      to="/#events"
                    >
                      Major Initiatives
                    </HashLink>
                  </div>
                  <div className="items" key={16}>
                    <HashLink
                      onClick={() => setSidebarActive(false)}
                      to="/#team"
                    >
                      Core Team
                    </HashLink>
                  </div>
                </motion.div>
              </motion.div>
              <motion.div className="items" variants={sidebar} key={2}>
                <HashLink onClick={() => setSidebarActive(false)} to="/vision">
                  Vision
                </HashLink>
              </motion.div>
              <motion.div className="items" variants={sidebar} key={3}>
                <a
                  onClick={() => setSidebarActive(false)}
                  href="https://event-bridge-alpha.vercel.app/"
                >
                  Events
                </a>
              </motion.div>
              <motion.div className="items" variants={sidebar} key={4}>
                <a
                  onClick={() => setSidebarActive(false)}
                  href="https://tbt-book-exchange.netlify.app/"
                >
                  The Thieves' Library
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <input
        onClick={toggleNav}
        type="checkbox"
        id="openMenu"
        className="btnmenu"
      />
      <label htmlFor="openMenu" className="sidebarIconToggle">
        <div className="spinner diagonal part-1"></div>
        <div className="spinner horizontal"></div>
        <div className="spinner diagonal part-2"></div>
      </label>
    </nav>
  );
}
