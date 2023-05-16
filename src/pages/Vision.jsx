import TeamSection from "../sections/NewTeamList";
import "../styles/vision.css";
import "../styles/loader.css";
import "../styles/team.css";
import ScrollToTop from "../components/scroll";
import teamMembers2022 from "../sections/teamMembers2022.json";
import Footer from "../sections/Footer";
const VisionPage = () => {
  function loaded() {
    const loader = document.getElementById("loader");
    loader.style.display = "none";
  }

  const data = teamMembers2022;
  function makeCard(data) {
    return (
      <div key={data.designation} className="column">
        <div className="border">
          <div className="avatarBG">
            <div className="avatar">
              <img src={"teamMembers22Images/" + data.image} alt="image" />
            </div>
          </div>
          <p>
            {data.name}
            <br></br>
            {data.designation}
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div id="loader" className="loading">
        <div className="loader book">
          <figure className="page"></figure>
          <figure className="page"></figure>
          <figure className="page"></figure>
        </div>
      </div>
      <div>
        <div
          style={{
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
            {/* <Navbar /> */}
            <section
              style={{
                marginBottom: 30,
                marginTop: "1%",
              }}
              className="visionSection"
            >
              <h1>Vision</h1>
              <p className="bigText">
                Our vision is to foster a lifelong appreciation of books and
                reading. We wish to develop a reading community with people of
                varying interests and unique thoughts.
              </p>
            </section>
            <div className="flex center" id="videoWrapper">
              <iframe
                src="https://www.youtube.com/embed/mA_JNAr_KDw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={loaded}
              ></iframe>
            </div>

            <section
              style={{
                marginBottom: 30,
              }}
              className="missionSection"
            >
              <h1>Mission</h1>
              <p className="bigText">
                Our mission is to build a sustainable and accessible environment
                which aims at spreading love for literature and philosophy and
                to inculcate habits of research and development amongst the
                broader student community. The outcome is to develop the overall
                writing and creative skills to a deeper level thereby raising
                possibilities of having the ability to participate in society.
              </p>
            </section>
            <section id="endSection">
              <br />
              <hr />
              <br />
              <p>
                Literary clubs are functioning successfully in various
                institutions around the world. Hence, being one of the best
                engineering colleges in the country, MEC also needed a
                well-established literary club.
              </p>
              <br />
              <p>
                Numerous students are interested in reading, sharing their
                insights and improving their literary skills. Furthermore, it is
                essential to inculcate the habit of reading in all students.
              </p>
              <p>
                That's how The Book Thieves originated in MEC. With the help of
                Lakshmi Sreekumar, a former student, the first core team of TBT
                formed a space not just for people who enjoy literature or
                fiction, but instead for all people of unique and varying
                interests.{" "}
              </p>
              <br />
              <p className="bigText mainText">
                We present to you the first core team of TBT who made this dream
                of many into a reality!
              </p>

              <br />
              <br />
            </section>
          </div>
          <TeamSection />
          <div className="section" id="team">
            <div className="head" style={{fontSize:"6vw"}}>Core Team 2022</div>

            <div className="row">
              {data.slice(0, 3).map((item) => {
                return makeCard(item);
              })}
            </div>
            <div className="row">
              {data.slice(3, 6).map((item) => {
                return makeCard(item);
              })}
            </div>
            <div className="row">
              {data.slice(6, 9).map((item) => {
                return makeCard(item);
              })}
            </div>
            <ScrollToTop />
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default VisionPage;
