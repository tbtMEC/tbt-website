import { HashLink } from "react-router-hash-link";
import "../styles/fourNotFour.css";
import Footer from "../sections/Footer"

const FourNotFour = () => (
  <div>
  <div
    style={{
      minHeight: "100vh",
      color: "#DCD1B2",
      backgroundColor: "#53090e",
      alignItems: "center",
    }}
    className="flex center "
  >
    <div
      id="err"
      className="box"
      style={{ textAlign: "center", padding: 50, fontSize: "150%" }}
    >
      <h1>404</h1>
      <h4>
        Ahoy there matey, you seem to have wandered into unknown territories!!
      </h4>
      <br />
      <HashLink className="link" style={{ color: "#DCD1B2" }} to="/">
        Come back into the light
      </HashLink>
    </div>
  </div>
  <Footer />
  </div>
);

export default FourNotFour;
