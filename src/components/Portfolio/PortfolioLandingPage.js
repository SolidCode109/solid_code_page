import React from "react";
import Link from 'next/link'

const portfolioLandingPageList = [
    {   
        id: "1",
        title: "Pająk Ogrodzenia - Sklep Woocommerce",
        image: "/portfolio.webp",
        category: 'Strona WWW, Woocommerce, SEO',
        link: "/portfolio",
        buttonText: "Zobacz sklep"
    },
    {   
        id: "2",
        title: "eFaktor Finansowanie biznesu - Strona WWW",
        image: "/portfolio.webp",
        category: 'Strona WWW, SEO, UI/UX',
        link: "/portfolio",
        buttonText: "Zobacz stronę"
    },
    {   
        id: "3",
        title: "Edbak - Strony WWW + Sklep",
        image: "/portfolio.webp",
        category: 'Strona WWW, SEO, UI/UX',
        link: "/portfolio",
        buttonText: "Zobacz sklep"
    },

];


const PortfolioLandingPageList = () => {
    return(
    <section id="portfolio" className="portfolio-section">
    <div className="container mx-auto px-4">
        <div className="container--portfolioList"> 
            {portfolioLandingPageList.map((item) =>
            <div key={item.id} className="item--sticky">
                <div className="container--portfolio">
                    <div className="bg-img">
                        <a className="thumbnail" href={item.link}>
                            <img className="h-auto max-w-full" src={item.image} alt={item.title}></img>
                        </a>
                    </div>
                    <div className="portfolio-content">
                        <h3 className="text-2xl mb-4 md:text-3xl">{item.title}</h3>
                        <p className="mb-4">{item.category}</p>
                <Link href={item.link}>
                <button className="group relative inline-flex h-8 items-center justify-center overflow-hidden shadow-md bg-[#ffb300] px-6 font-medium text-[#242424] duration-500">
                <div className="translate-x-0 opacity-100 transition duration-700 ease-in-out group-hover:-translate-x-[150%] group-hover:opacity-0">
                  {item.buttonText}
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
                    </div>
                </div>
            </div>
        )}
        </div>
    </div>
    </section>
    );
};

export default PortfolioLandingPageList;