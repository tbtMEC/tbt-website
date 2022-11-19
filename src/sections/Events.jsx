import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/events.scss";
import events from "../eventsData.json";
import EventCard from "../components/eventCard";
import useMediaQuery from "../hooks/useMediaQuery";

const responsiveSpecs = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

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
      <h1 className="title">Our Past Events</h1>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsiveSpecs}
        infinite={true}
        autoPlay={isMobile ? true : false}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={900}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </Carousel>
    </div>
  );
};

export default Events;
