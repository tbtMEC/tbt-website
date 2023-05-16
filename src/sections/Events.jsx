import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/events.css";
import events from "../eventsData.json";
import EventCard from "../components/eventCard";
import useMediaQuery from "../hooks/useMediaQuery";


const Events = () => {
  const isMobile = !useMediaQuery("(min-width: 960px)");
  return (
    <div
      className="section"
      id="events"
      style={{
        backgroundColor: "#53171b",
        padding: 10,
      }}
    >
      <h1 className="title">Our Major Initiatives</h1>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay={isMobile ? true : false} 
        autoPlaySpeed={5000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={true}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover={true}
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={true}
        rewindWithAnimation={true}
        rtl={false}
        shouldResetAutoplay
        showDots={true}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        transitionDuration={1000}
      >
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </Carousel>
    </div>
  );
};

export default Events;
