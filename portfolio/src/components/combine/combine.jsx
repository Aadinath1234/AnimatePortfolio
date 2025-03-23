import React from "react";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Testimonials from "../Testimonials/Testimonials";
import Skills from "../Skills/Skills";
import Portfolio from "../Portfolio/Portfolio";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

function Combine() {
  return (
    <div className="w-full">
      <article
        style={{
          maxWidth: "auto",
          padding: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="testimonial">
          <Testimonials />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="experience">
          <Services />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </article>
    </div>
  );
}

export default Combine;
