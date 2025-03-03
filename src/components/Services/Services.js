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
            <a
              href="/kontakt"
              className="btn btn-primary bg-blue-500 text-white py-2 px-4 rounded"
            >
              {serviceDetails.buttonText}
            </a>
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
