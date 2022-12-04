import { HashLink } from "react-router-hash-link";
import "../styles/fourNotFour.scss";

const FourNotFour = () => (
  <div
    style={{
      minHeight: "100vh",
      color: "#DCD1B2",
      backgroundColor: "#53090e",
      alignItems: "center",
    }}
    className="flex center"
  >
    <div
      className=""
      style={{ textAlign: "center", padding: 50, fontSize: "150%" }}
    >
      <h1>404</h1>
      <h4>
        Ahoy there matey, you seem to have wandered into unknown territories!!
      </h4>
      <br />
      <HashLink style={{ color: "#DCD1B2" }} to="/">
        Come back into the light
      </HashLink>
    </div>
  </div>
);

export default FourNotFour;
