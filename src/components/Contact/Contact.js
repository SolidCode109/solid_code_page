import React from "react";
import "./Mail.js";

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
      <div id="contact_banner">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center h-64 bg-linear-65">
            <div className="hero-content">
              <h1 className="text-6xl font-bold">Kontakt</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between flex-wrap">
          <div className="basic-1/3">
            <h2>Formularz kontakowy</h2>

            <form action="/send_email" method="post">
              <label htmlFor="name">Imie:</label>
              <input type="text" name="name" id="name" required></input>

              <label htmlFor="email">Email:</label>
              <input type="email" name="from" id="from" required></input>

              <label htmlFor="phone">Telefon:</label>
              <input type="tel" name="phone" id="phone" required></input>

              <label htmlFor="Wiadomość">Wiadomość:</label>
              <textarea name="message" id="message" required></textarea>

              <input type="submit" value="Wyślij"></input>
            </form>
          </div>
          <div className="basis-1/3">
            <div className="contact--container mb-8">
              <a href={`tel:${contactDetails[0].numer}`}>
                <img
                  className="iconify mdi-light--home w-10 h-auto"
                  src={contactDetails[0].image}
                />
              </a>
              <h3 className="text-xl md:text-2xl pt-2.5">
                {contactDetails[0].alt}
              </h3>
              <p>{contactDetails[0].numer}</p>
            </div>
            <div className="contact--container mb-8">
              <a href={`mailto:${contactDetails[1].email}`}>
                <img
                  className="iconify mdi-light--home w-10 h-auto"
                  src={contactDetails[1].image}
                />
              </a>
              <h3 className="text-xl md:text-2xl pt-2.5">
                {contactDetails[1].alt}
              </h3>
              <p>{contactDetails[1].email}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
