import "../styles/footer.scss";

const Footer = () => {
  return (
    <body>
      <div id="footer">
        <footer>
          <p className="solid">
            <div className="footer-content">
              <div className="row">
                <div className="column">
                  <img
                    src="OFFICIAL_LOGO1 1.png"
                    alt="Official Logo"
                    style={{
                      height: "132px",
                      paddingRight: "10px",
                      borderBlockColor: "white",
                    }}
                  />
                </div>
                <div className="column"></div>
              </div>
            </div>

            <hr className="solid" />
            <div className="footer-bottom">
              <ul className="socials">
                <a href="https://instagram.com/thebookthieves.mec?igshid=YmMyMTA2M2Y=">
                  <img src="insta.png" alt="Instagram" />
                </a>
                <a href="https://www.linkedin.com/company/the-book-thieves-mec/">
                  <img src="linkedin.png" alt="LinkedIn" />
                </a>
                <a href="https://discord.gg/eQ7GcZcPw5">
                  <img src="discord.png" alt="Discord" />
                </a>
              </ul>

              <div className="fbc">
                <p className="copyright"> &copy; The Book Thieves</p>
              </div>
            </div>
          </p>
        </footer>
      </div>
    </body>
  );
};

export default Footer;
