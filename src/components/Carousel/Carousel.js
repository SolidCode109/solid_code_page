import React from "react";

const carouselImages = [
  { id: "1", image: "/globe.svg", alt: "test" },
  { id: "2", image: "/globe.svg", alt: "test" },
  { id: "3", image: "/globe.svg", alt: "test" },
  { id: "4", image: "/globe.svg", alt: "test" },
  { id: "5", image: "/globe.svg", alt: "test" },
  { id: "6", image: "/globe.svg", alt: "test" },
];

const InfiniteCarousel = () => {
  return (
    <div className="container mx-auto px-4">
    <div className="carousel">
      <div className="carousel__track">
        {[...carouselImages, ...carouselImages].map((image, index) => (
          <div key={index} className="carousel__item">
            <a href="/o-nas">
              <img src={image.image} alt={`${image.alt} ${index % carouselImages.length + 1}`} />
            </a>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default InfiniteCarousel;

