import { useRef, useMemo, useState, useEffect } from "react";
import "./Homepage.css";
import Typewriter from "../components/Typewriter.js";

export default function Homepage() {
  return (
    <>
      <section className="screenSection">
        <div className="sectionContent">
          <div className="introText">
            <Typewriter lines={[
              "my name is benjamin.",
              "this is my website.",
              "welcome.",
            ]} letterTime={40} lineTime={400}/>
          </div>

          <div className="downArrow">
            <span className="material-symbols-outlined">
              expand_more
            </span>
          </div>
        </div>
      </section>

      <section className="screenSection">
        <div className="sectionContent">
          <div className="infoText">
            <p><span className="italics">name:</span> benjamin kleyn</p>
            <p><span className="italics">pronouns:</span> he/him</p>
            <p><span className="italics">age:</span> 19 years</p>
            <p><span className="italics">location:</span> stellenbosch, south africa</p>
            <p><span className="italics">slay:</span> queen</p>
          </div>
          <img src="benjamin.jpg" alt="a picture of me in hungary" />
        </div>
      </section>

    </>
  );
}
