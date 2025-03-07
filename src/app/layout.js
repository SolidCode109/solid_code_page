import { Roboto, Montserrat } from 'next/font/google';
import "./globals.css";
import Header from "../components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Footer from "@/components/Footer/Footer";
import InfoWWW from "@/components/InfoWWW/InfoWWW";
import InfoDesign from '@/components/InfoDesign/InfoDesign';
import Testimonials from '@/components/Testimonials/Testimonials';
import InfoSEO from '@/components/InfoSEO/InfoSEO';
import Carousel from '@/components/Carousel/Carousel';
import Portfolio from '@/components/Portfolio/PortfolioLandingPage';


const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
})

const montserrat = Montserrat({
  variable: "--font-montserrant",
  subsets: ["latin"],
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${montserrat.variable} antialiased`}
      >
        <div>
          <Header />
          <Hero />
          <Services />
          <Portfolio />
          <InfoWWW />
          <InfoDesign />
          <InfoSEO />
          <Carousel />
          {/* <Testimonials /> */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
