import React from "react";
import "./App.css";
import { ExternalLink } from "react-external-link";
import ComponentWrapper from "./external";
// import { useEffect } from "react";
// import useSound from "use-sound";

function Result() {
  // const [play] = useSound("./mus.mp3");
  // useEffect(() => {
  //   play();
  // });
  return (
    <>
      <div className="firework-1"></div>
      <div className="firework-2"></div>
      <div className="firework-3"></div>
      <div className="firework-4"></div>
      <div className="firework-5"></div>
      <div className="firework-6"></div>
      <div className="firework-7"></div>
      <div className="firework-8"></div>
      <div className="firework-9"></div>
      <div className="firework-10"></div>
      <div className="firework-11"></div>
      <div className="firework-12"></div>
      <div className="firework-13"></div>
      <div className="firework-14"></div>
      <div className="firework-15"></div>
      <div className="wrapper">
        <div className="container">
          <h1>Birthday Girl</h1>
        </div>
      </div>

      <section className="sec" aria-label="Floating Logo">
        <div className="tilt">
          <span>A</span>
          <span>Y</span>
          <span>S</span>
          <span>H</span>
          <span>E</span>
          <span>E</span>
        </div>
      </section>

      <ComponentWrapper className="disappear" />

      <div id="containerx">
        <div id="flip">
          <div>
            <div>Adipoli</div>
          </div>
          <div>
            <div>Mass</div>
          </div>
          <div>
            <div>Vishayam</div>
          </div>
        </div>
        Aysha
      </div>

      <div className="dropping-texts">
        <div>Happy</div>
        <div>Awesome</div>
        <div>Birthday tuu u</div>
      </div>

      <span className="gradient-text">🎂</span>
      <ExternalLink
        target="_self"
        href="https://hbdayshh.vercel.app"
        className="gradient-text"
      >
        <span className="gradient-text">...</span>
      </ExternalLink>
    </>
  );
}

export default Result;
