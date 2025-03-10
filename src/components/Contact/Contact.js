import React from "react";

const contactDetails = [
  {
    id: "0",
    numer: "+48 660 171 298",
    image: "../phone.svg",
    alt: "Numer kontaktowy",
  },
  {
    id: "1",
    email: "info@solid-code.pl",
    image: "../email.svg",
    alt: "Email kontaktowy",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container mx-auto px-4">
        <div className="flex justify-between flex-wrap">
          <div className="basic-1/3">
            <h2>Contact form</h2>
          </div>
          <div className="basis-1/3">


          <div className="contact--container mb-8">
            <a href={`tel:${contactDetails[0].numer}`}>
              <img className="iconify mdi-light--home w-10 h-auto" src={contactDetails[0].image} />
            </a>
            <h3 className="text-xl md:text-2xl pt-2.5">{contactDetails[0].alt}</h3>
            <p>{contactDetails[0].numer}</p>
           </div>
          <div className="contact--container mb-8">
            <a href={`mailto:${contactDetails[1].email}`}>
              <img className="iconify mdi-light--home w-10 h-auto" src={contactDetails[1].image} />
            </a>
            <h3 className="text-xl md:text-2xl pt-2.5">{contactDetails[1].alt}</h3>
            <p>{contactDetails[1].email}</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
