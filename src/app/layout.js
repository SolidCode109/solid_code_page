import { Geist, Geist_Mono } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css';
import "./globals.css";
import Header from "../components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <Hero />
        <Services />       
        <footer className="flex gap-6 flex-wrap items-center justify-center">
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
