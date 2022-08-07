import "../styles/footer.scss";

const Footer = () => {
  return (
    <div className="section" id="footer">

      <footer>
       <p class="solid">
         <div className="footer-content">

           <div className="row">
              <div className="column">

                 <img src="OFFICIAL_LOGO1 1.png"
                   alt="Official Logo"
                   style={{height: "132px", paddingRight: "10px",borderBlockColor: "white"}}/>

               </div>
               <div className="column">
                  <ul><li>
                    <a href="#i">Terms & Conditions</a></li><li>
                    <a href="#i">Privacy & Cookies</a></li><li>
                    <a href="#i">FAQs</a></li>
                  </ul>{/*add links for the above */}
                </div>
               </div>  
              </div>

          <hr class="solid"/>
          <div className="footer-bottom">
             
               <ul className="socials">
                  <a href="https://instagram.com/thebookthieves.mec?igshid=YmMyMTA2M2Y="><img src="insta.png" alt="Instagram" /></a>
                 <a href="https://www.linkedin.com/company/the-book-thieves-mec/"><img src="linkedin.png" alt="LinkedIn" /></a>
                  <a href="https://discord.gg/eQ7GcZcPw5"><img src="discord.png" alt="Discord" /></a> 
                </ul>

             <div className="fbc">
                   <p className="copyright"> &copy; The Book Thieves</p>
            </div>
          </div>
        </p>  
      </footer>
    </div>
  );
};

export default Footer;
