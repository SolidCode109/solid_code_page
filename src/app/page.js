"use client";

import React from "react";
import MyRoutes from "@/routers/routers";
import Hero from "@/components/Hero/Hero";


export default function Home() {
  return (
    <div className="main-wrapper">
      <MyRoutes />
      <Hero />
    </div>
  );
}
