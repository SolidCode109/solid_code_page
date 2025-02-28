"use client";

import React from "react";
import MyRoutes from "@/routers/routers";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";


export default function Home() {
  return (
    <div className="main-wrapper">
      <MyRoutes />
      <Hero />
      <Services />
    </div>
  );
}
