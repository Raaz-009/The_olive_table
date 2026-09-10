import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Signature from "./components/Signature";
import FullMenu from "./components/FullMenu";
import Chef from "./components/Chef";
import React from "react";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Reserve from "./components/Reserve";
import Location from "./components/Location";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div id="top">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Signature />
        <FullMenu />
        <Chef />
        <Gallery />
        <Reviews />
        <Reserve />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
