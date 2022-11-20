import Navbar from "../sections/Navbar";
import TeamSection from "../sections/NewTeamList";
import "../styles/vision.scss";

const VisionPage = () => {
  return (
    <div
      style={{
        backgroundColor: "#53171b",
        minHeight: "100vh",
        color: "#DCD1B2",
      }}
      id="vision"
    >
      <div
        className="wrapper"
        style={{
          padding: 50,
          paddingTop: 200,
        }}
      >
        <Navbar />
        <section
          style={{
            marginBottom: 30,
          }}
        >
          <h1>Vision</h1>
          <p>
            Our vision is to foster a lifelong appreciation of books and
            reading. We wish to develop a reading community with people of
            varying interests and unique thoughts.
          </p>
        </section>

        <section
          style={{
            marginBottom: 30,
          }}
        >
          <h1>Mission</h1>
          <p>
            Our mission is to build a sustainable and accessible environment
            which aims at spreading love for literature and philosophy and to
            inculcate habits of research and development amongst the broader
            student community. The outcome is to develop the overall writing and
            creative skills to a deeper level thereby raising possibilities of
            having the ability to participate in society
          </p>
        </section>

        <br />
        <hr />
        <br />
        <p>
          Literary clubs are functioning successfully in various institutions
          around the world. Hence, being one of the best engineering colleges in
          the country, MEC also needed a well-established literary club.
        </p>
        <br />
        <p>
          Numerous students are interested in reading, sharing their insights
          and improving their literary skills. Furthermore, it is essential to
          inculcate the habit of reading in all students.
        </p>
        <p>
          That's how The Book Thieves originated in MEC. With the help of
          Lakshmi Sreekumar, a former student, the first core team of TBT formed
          a space not just for people who enjoy literature or fiction, but
          instead for all people of unique and varying interests.{" "}
        </p>
        <br />
        <p>
          We present to you the first core team of TBT who made this dream of
          many into a reality!
        </p>

        <br />
        <br />

        <TeamSection />
      </div>
    </div>
  );
};

export default VisionPage;
