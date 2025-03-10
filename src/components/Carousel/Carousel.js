import React from "react";

const carouselImages = [
  { id: "1", image: "/wordpress.svg", alt: "Wordpress" },
  { id: "2", image: "/woocommerce.svg", alt: "Woocommerce" },
  { id: "3", image: "/seo.svg", alt: "SEO" },
  { id: "4", image: "/hosting.svg", alt: "Hosting" },
  { id: "5", image: "/figma.svg", alt: "Figma" },
  { id: "6", image: "/laravel.svg", alt: "Laravel" },
  { id: "7", image: "/nextjs.svg", alt: "Nextjs" },
  { id: "8", image: "/reactjs.svg", alt: "ReactJs" },
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

