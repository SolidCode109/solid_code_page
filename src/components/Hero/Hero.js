import React from "react";

const Hero = ({
    heading = "Rozwiązania napędzające Twój biznes",
    description = "Szukasz kompleksowych usług online? Tworzymy nowoczesne strony internetowe, oferujemy niezawodny hosting, skuteczne SEO i zoptymalizowany UX. Dzięki doświadczeniu na rynku polskim i zagranicznym pomożemy Twojej firmie osiągnąć sukces.",
    buttonText = "Zacznij współpracę",
    bg_img1 ="/hero-animation1.svg",
    bg_img2 ="/hero-animation2.svg"


}) => {
    return(
     <section id="hero" className="hero-section">
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
                <div className="w-full md:w-7/12 md:order-2">
                    <div className="hero-content">
                        <h1 className="text-4xl font-bold">{heading}</h1>
                    </div>

                    <div className="content mt-4">
                        <p className="sub-title text-lg mb-4">{description}</p>
                        <a href="/kontakt" className="btn btn-primary bg-blue-500 text-white py-2 px-4 rounded">{buttonText}</a> 
                    </div>

                </div>
            </div>

            <div className="hero-bg relative mt-8">
                <img className="circle-1 absolute top-0 left-0 w-1/2" src={bg_img1} alt="Background 1" />
                <img className="circle-2 absolute top-0 right-0 w-1/2" src={bg_img2} alt="Background 2" />
            </div>
        </div>
     </section>
    );
};

export default Hero;