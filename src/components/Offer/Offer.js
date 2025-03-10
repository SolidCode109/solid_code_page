import React from "react";

import Link from "next/link";



const offerList = [
  {
    id: "1",
    title: "Wsparcie techniczne",
    image: "../phone.svg",
    description:
      "Profesjonalne wsparcie techniczne dla stron internetowych, szybka pomoc w rozwiązywaniu problemów i optymalizacji działania.",
  },
  {
    id: "2",
    title: "Hosting",
    image: "../phone.svg",
    description:
      "Szybki i bezpieczny hosting stron internetowych, gwarantujący stabilność działania i wysoką wydajność.",
  },
  {
    id: "3",
    title: "Certyfikaty SSL",
    image: "../phone.svg",
    description:
      "Zapewniamy certyfikaty SSL dla Twojej strony, chroniąc dane użytkowników i zwiększając wiarygodność witryny.",
  },
  {
    id: "4",
    title: "Indywidyalny design UI/UX",
    image: "../phone.svg",
    description: "Tworzymy unikalne projekty UI/UX, dopasowane do potrzeb Twojej marki, zapewniające intuicyjną nawigację i pozytywne doświadczenia użytkowników.",
  },
  {
    id: "5",
    title: "Backupy stron",
    image: "../phone.svg",
    description:
      "Regularne kopie zapasowe stron internetowych, zapewniające bezpieczeństwo danych i łatwe przywracanie w razie awarii.",
  },
  {
    id: "6",
    title: "Aktualizacja stron",
    image: "../phone.svg",
    description: "Profesjonalna aktualizacja stron internetowych, zapewniająca ich bezpieczeństwo, zgodność z najnowszymi standardami i lepszą wydajność.",
  },
];

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


    <div className="inline-grid gap-4 xl:grid-cols-3  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {offerList.map((service, index) => (
          <div key={index} className="">
            <div className="flex items-center justify-center flex-col h-full mb-3 py-6 px-4 bg-[#1b1b1b]">
            <img className="iconify mdi-light--home w-10 h-auto mb-5" src={service.image} />
              <div className="content text-center">
                <h3 className="pb-2.5">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

        </div>
      </section>
    );
};


export default Offer;