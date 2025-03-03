import React from "react";

const services = [
  {
    id: "1",
    title: "Strony internetowe",
    description:
      "Responsywne strony internetowe, zoptymalizowane pod SEO, dopasowane do Twojej branży.",
  },
  {
    id: "2",
    title: "Sklepy e-commerce",
    description:
      "Sklepy e-commerce – wydajne i łatwe w obsłudze rozwiązania dla sprzedaży online.",
  },
  {
    id: "3",
    title: "Indywitualny design",
    description:
      "Unikalne projekty graficzne zgodne z Twoją identyfikacją wizualną.",
  },
  {
    id: "4",
    title: "Hosting i administracja",
    description: "Szybki, bezpieczny serwer z pełnym wsparciem technicznym.",
  },
  {
    id: "5",
    title: "Optymalizacja SEO",
    description:
      "Strategie zwiększające widoczność w Google i poprawiające doświadczenia użytkowników.",
  },
  {
    id: "6",
    title: "UI/UX ",
    description: "Lorem",
  },
];

const serviceDetails = {
    heading: "Rozwiązania napędzające Twój biznes",
    description: "Rozwiązania napędzające Twój biznes",
    buttonText: "O nas"
};

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap py-8">
        <div className="w-full md:w-7/12 md:order-2">
          <div className="hero-content">
            <h1 className="text-4xl font-bold">{serviceDetails.heading}</h1>
          </div>

          <div className="content mt-4">
            <p className="sub-title text-lg mb-4">{serviceDetails.description}</p>
            <button class="group relative inline-flex h-8 items-center justify-center overflow-hidden shadow-md bg-[#ffb300] px-6 font-medium text-[#242424] duration-500">
                <div class="translate-x-0 opacity-100 transition duration-700 ease-in-out group-hover:-translate-x-[150%] group-hover:opacity-0">
                  {serviceDetails.buttonText}
                </div>
                <div class="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                  >
                    <path
                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </button>
          </div>
        </div>
      </div>

      <div className="inline-grid grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div key={index} className="">
            <div className="flex items-start mb-3">
              <div className="item-count">{service.id}</div>
              <div className="content">
                <h3 className="mt-0">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
