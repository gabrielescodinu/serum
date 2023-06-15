import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Stats from "./components/Stats";
import Content from "./components/Content";
import Team from "./components/Team";
import Highlights from "./components/Highlights";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Partners from "./components/Partners";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import "./App.css";

const App = () => {
  return (
    <div className="bg-secondary p-4">
      <Header />
      <Hero />
      <Features />
      <Services />
      <Blog />
      <Stats />
      <Content />
      <Team />
      <Highlights />
      <Testimonials />
      <Pricing />
      <Partners />
      <Contacts />
      <Footer />
      <ScrollTop />
    </div>
  );
};

export default App;
