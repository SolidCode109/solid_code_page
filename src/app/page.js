import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Footer from "../components/Footer/Footer";
import InfoWWW from "../components/InfoWWW/InfoWWW";
import InfoDesign from '../components/InfoDesign/InfoDesign';
import InfoSEO from '../components/InfoSEO/InfoSEO';
import Carousel from '../components/Carousel/Carousel';
import Portfolio from '../components/Portfolio/PortfolioLandingPage';


export default function Home() {
  return (
    <div className="main-wrapper">
          <Header />
          <Hero />
          <Services />
          <Portfolio />
          <InfoWWW />
          <InfoDesign />
          <InfoSEO />
          <Carousel />
          <Footer />
    </div>
  );
}
