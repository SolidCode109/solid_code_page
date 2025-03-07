import React from "react";

const portfolioLandingPageList = [
    {   
        id: "1",
        title: "Lorem",
        image: "/kontakt.webp",
        category: '["Strona WWW", "SEO"]',
        link: "/portfolio"
    },
    {   
        id: "2",
        title: "Lorem",
        image: "/kontakt.webp",
        category: '["Strona WWW", "SEO"]',
        link: "/portfolio"
    },
    {   
        id: "3",
        title: "Lorem",
        image: "/kontakt.webp",
        category: '["Strona WWW", "SEO"]',
        link: "/portfolio"
    },

];


const PortfolioLandingPageList = () => {
    return(
    <section id="portfolio" className="portfolio-section">
    <div className="container mx-auto px-4">
        <div>
            {portfolioLandingPageList.map((item) =>
            <div key={item.id} className="">
                <div className="container--portfolio">
                    <div className="bg-img">
                        <a className="thumbnail" href={item.link}>
                            <img src={item.image} alt={item.title}></img>
                        </a>
                    </div>
                    <div className="portfolio-content">
                        <h3>{item.title}</h3>
                        <p>{item.category}</p>
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