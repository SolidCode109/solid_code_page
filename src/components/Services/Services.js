import React from 'react';

const services =[
    {
        id: "1",
        title: "Strony internetowe & sklepy e-commerce",
        description: "Responsywne strony internetowe, zoptymalizowane pod SEO, dopasowane do Twojej branży. Sklepy e-commerce – wydajne i łatwe w obsłudze rozwiązania dla sprzedaży online."
    },
    {
        id: "2",
        title: "Indywitualny design",
        description: "Unikalne projekty graficzne zgodne z Twoją identyfikacją wizualną."
    },
    {
        id: "3",
        title: "Hosting i administracja",
        description: "Szybki, bezpieczny serwer z pełnym wsparciem technicznym."
    },
    {
        id: "4",
        title: "Optymalizacja SEO i UX",
        description: "Strategie zwiększające widoczność w Google i poprawiające doświadczenia użytkowników."
    }

];

const Services = () => {
    return (
       <div>
        {services.map((service, index) => (
            <div key={index} className="">
                <div>
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