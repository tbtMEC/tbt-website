import { FaInstagram } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { RxDiscordLogo, RxTwitterLogo } from "react-icons/rx";
import { TbBrandLinkedin, TbBrandYoutube } from "react-icons/tb";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <div id="footer">
      <footer>
        <div className="solid">
          <div className="footer-content">
            <div className="row">
              <div className="column">
                <img
                  src="tbtLogo.png"
                  alt="TBT Logo"
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
                <FaInstagram className="icon" />
              </a>
              <a href="https://www.linkedin.com/company/the-book-thieves-mec/">
                <TbBrandLinkedin className="icon" />
              </a>

              <a href="https://www.youtube.com/channel/UCRw4Vm3ynoMA4LVAB1g42Fw">
                <TbBrandYoutube className="icon" />
              </a>
              <a href="https://twitter.com/bookthievesmec">
                <RxTwitterLogo className="icon" />
              </a>
              <a href="mailto:thebookthieves@mec.ac.in">
                <MdAlternateEmail className="icon" />
              </a>
              <a href="https://discord.gg/eQ7GcZcPw5">
                <RxDiscordLogo className="icon" />
              </a>
            </ul>

            <div className="fbc">
              <p className="copyright">
                &copy;{" "}
                <span id="copyright-year">{new Date().getFullYear()}</span> The Book Thieves
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
