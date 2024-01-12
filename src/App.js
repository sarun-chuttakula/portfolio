// import logo from "./logo.svg";
// import "./App.css";
import "./main.css";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function App() {
  //hero section
  useEffect(() => {
    const heroTL = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top bottom",
        toggleActions: "play none restart none",
      },
    });

    heroTL.from(".gsap-nav-item", {
      y: -30,
      opacity: 0,
      ease: "back",
      stagger: 0.2,
    });

    heroTL.from(".gsap__hero__item", {
      y: -30,
      opacity: 0,
      stagger: 0.2,
    });

    heroTL.from(".hero__illustration", {
      y: 30,
      opacity: 0,
    });

    heroTL.from(".hero__illustration__img", {
      rotate: -90,
      repeat: -1,
      yoyo: true,
      duration: 15,
    });

    heroTL.from(".hero__illustration__text", {
      y: "-155px",
      repeat: -1,
      duration: 10,
      yoyo: true,
      opacity: 1,
      delay: 2,
    });
  }, []);
  return (
    <>
      <body>
        <main className="container">
          <section id="hero" className="hero section">
            <nav className="nav">
              <div className="nav__logo gsap-nav-item">Sarun Chuttakula</div>
              <div className="nav__items">
                <div className="nav__item gsap-nav-item">
                  <a href="#projects">Projects</a>
                </div>
                <div className="nav__item gsap-nav-item">
                  <a href="#about">About</a>
                </div>
                <div className="nav__item gsap-nav-item">
                  <a href="#contact">Contact</a>
                </div>
              </div>
            </nav>
            <div className="__content-wrap">
              <div className="hero__content">
                <h1 className="hero__content__title title__gradient gsap__hero__item">
                  <span className="hero__content__title--small">
                    Full Stack Developer.
                  </span>
                  Bringing your digital
                  <span className="hero__content__title--accent">ideas</span> to
                  life with custom web applications.
                </h1>
                <p className="hero__content__paragraph gsap__hero__item">
                  I'm a full stack developer based in Bangkok, Thailand. I enjoy
                  building everything from small business sites to rich
                  interactive web apps. If you are a business seeking a web
                  presence or an employer looking to hire, you can get in touch
                  with me here.
                </p>
                <div className="gsap__hero__item">
                  <a href="#resume" className="hero__content__link">
                    {" "}
                    Resume
                  </a>
                </div>
              </div>
              <div className="hero__illustration">
                <div className="hero__illustration__content">
                  <span className="hero__illustration__text"> React </span>
                  <span className="hero__illustration__text"> Node.js</span>
                  <span className="hero__illustration__text"> Express.js</span>
                  <span className="hero__illustration__text"> MongoDB</span>
                  <span className="hero__illustration__text"> MySQL</span>
                  <span className="hero__illustration__text"> PHP</span>
                </div>
                <img
                  className="hero__illustration__img"
                  src={require("./assets/portfolio-illustration.png")}
                  alt="hero"
                />
              </div>
            </div>
          </section>
        </main>
      </body>
    </>
  );
}

export default App;
