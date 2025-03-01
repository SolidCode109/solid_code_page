import React from 'react';

const services =[
    {
        id: "1",
        title: "Strony internetowe",
        description: "Responsywne strony internetowe, zoptymalizowane pod SEO, dopasowane do Twojej branży."
    },
    {
        id: "2",
        title: "Sklepy e-commerce",
        description: "Sklepy e-commerce – wydajne i łatwe w obsłudze rozwiązania dla sprzedaży online."
    },
    {
        id: "3",
        title: "Indywitualny design",
        description: "Unikalne projekty graficzne zgodne z Twoją identyfikacją wizualną."
    },
    {
        id: "4",
        title: "Hosting i administracja",
        description: "Szybki, bezpieczny serwer z pełnym wsparciem technicznym."
    },
    {
        id: "5",
        title: "Optymalizacja SEO",
        description: "Strategie zwiększające widoczność w Google i poprawiające doświadczenia użytkowników."
    },
    {
        id: "6",
        title: "UI/UX ",
        description: "Lorem"
    },

];

const Services = () => {
    return (
       <div className="inline-grid grid-cols-3 gap-4">
        {services.map((service, index) => (
            <div key={index} className="">
                <div className="mb-3">
                <div className="item-count">{service.id}</div>
                        <div className="content">
                            <h4 className="mt-0">{service.title}</h4>
                            <p>{service.description}</p>
                        </div>
                    </div>
                </div>
        ))}
       </div>
    );
};

export default Services;