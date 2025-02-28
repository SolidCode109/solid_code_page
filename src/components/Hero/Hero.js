import React from "react";

const Hero = ({
    heading = "Rozwiązania napędzające Twój biznes",
    description = "Szukasz kompleksowych usług online? Tworzymy nowoczesne strony internetowe, oferujemy niezawodny hosting, skuteczne SEO i zoptymalizowany UX. Dzięki doświadczeniu na rynku polskim i zagranicznym pomożemy Twojej firmie osiągnąć sukces.",
    buttonText = "Zacznij współpracę",


}) => {
    return(
     <section id="hero" className="hero-section">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="hero-content">
                        <h1>{heading}</h1>
                    </div>

                    <div className="content">
                        <p className="sub-title order-first order-md-last">{description}</p>
                        <a href="/kontakt" className="btn btn-primary">{buttonText}</a> 
                    </div>

                </div>
            </div>

            {/* <div className="hero-bg">
                <img className="circle-1" src={bgImage1} alt="Background 1" />
                <img className="circle-2" src={bgImage2} alt="Background 2" />
            </div> */}
        </div>
     </section>
    );
};

export default Hero;