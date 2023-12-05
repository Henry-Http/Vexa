import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import fashionTrendImg from "../assets/fashionTrend.webp";
import fashionTrendImg2 from "../assets/fashionTrends2.jpg";
import techTrendsImg from "../assets/techTrends.jpg";
import techTrendsImg2 from "../assets/techTrends2.jpg";

export const Carousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          {" "}
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={fashionTrendImg}
          ></img>
        </div>
        <div className="embla__slide">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={fashionTrendImg2}
          ></img>
        </div>
        <div className="embla__slide">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={techTrendsImg}
          ></img>
        </div>
        <div className="embla__slide">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={techTrendsImg2}
          ></img>
        </div>
      </div>
    </div>
  );
};
