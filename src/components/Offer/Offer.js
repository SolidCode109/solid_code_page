import React from "react";

import Link from "next/link";


const offerTexts = {
  heading: "Bezpłatna wycena!",
  description:
    "Chcesz stworzyć stronę internetową, która nie tylko zachwyca designem, ale także przyciąga potencjalnych klientów? Oferujemy bezpłatną wycenę projektu strony z optymalizacją pod SEO oraz kompleksowym wsparciem hostingowym!",
  buttonText: "Darmowa wycena!"
};

const Offer = () => {
    return (
        <section id="contact" className="contact-section">
        <div className="container mx-auto px-4">
  
  
        <div className="flex flex-wrap items-center h-64 bg-linear-65">
              <div className="hero-content">
                <h1 className="text-6xl font-bold">Oferta</h1>
              </div>
        </div>


        <div className="container mx-auto px-4 py-4 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

            <div className="my-auto p-4 order-2 md:order-1 sm:order-2">
                <h2 className="text-2xl mb-8 md:text-3xl">{offerTexts.heading}</h2>
                <p className="my-6 space-y-4">{offerTexts.description}</p>

                <Link href="/kontakt">
              <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden shadow-md bg-[#ffb300] px-6 font-medium text-[#242424] duration-500">
                <div className="translate-x-0 opacity-100 transition duration-700 ease-in-out group-hover:-translate-x-[150%] group-hover:opacity-0">
                  {offerTexts.buttonText}
                </div>
                <div className="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                  >
                    <path
                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </button>
              </Link>

                <div className="my-6 space-y-4">
                <h3 className="text-xl md:text-xl">{offerTexts.list1_Title}</h3>
                </div>
            </div>
            <div className="p-4 order-1 md:order-2 sm:order-1">
                <img src="../design.webp" alt="Usługi nowoczesnego designu" />
        </div>
        </div>
    </div>

        </div>
      </section>
    );
};


export default Offer;