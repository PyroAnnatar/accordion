"use client";

import Accordion from "@/Accordion";
import React from "react";

const Home = () => {
  return (
    <div className="accordion-container bg-cyan-600/80 w-2/5 p-4 rounded-xl">
      <h3 className="text-center mb-4 text-xl font-bold text-white">
        Sıkça Sorular Sorular
      </h3>
      <div className="grid gap-4">
        <Accordion question="Ürün kaliteli mi?" />
        <Accordion question="Fiyatı ne kadar?" />
        <Accordion question="Ne zaman ulaşır?" />
      </div>
    </div>
  );
};

export default Home;
