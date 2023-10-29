import { Link } from "react-router-dom";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="scrollSection">
      <div className="sectionContent">
        <h1>Projects</h1>
        <p>Here are some things i've been making for fun that you might find interesting:</p>

        <h2> Unfinished </h2>
        <div className="projectCard">
          <a href="https://kriepiekrollie.github.io/polyhedra/">
            <img src="polyhedra.jpg" />
          </a>
          <div className="projectText">
            <a href="https://kriepiekrollie.github.io/polyhedra/"><h3> Polyhedral Playground </h3></a>
            <p> I wanted to create a fun and pretty way to play with polyhedra so this is what I came up with. </p>
            <p> I'm still adding shapes and I hope to have a huge catalog and more cool features by the end. </p>
          </div>
        </div>

        <div className="projectCard">
          <a href="https://github.com/kriepiekrollie/cp-solutions/">          
            <img src="cpsolutions.jpg" />
          </a>
          <div className="projectText">
            <a href="https://github.com/kriepiekrollie/cp-solutions/"><h3> CP Solutions </h3></a>
            <p> Basically solutions to various competitive programming problems. </p>
            <p> 
              So far I've only added two section from <a href="https://cses.fi">cses</a> and the past few years of <a href="https://olympiad.org.za/programming-olympiad/"> saco </a>.
            </p>
          </div>
        </div>

        <h2> Done </h2>
        <div className="projectCard">
          <a href="https://kriepiekrollie.github.io/set-game/">          
            <img src="setgame.jpg" />
          </a>
          <div className="projectText">
            <a href="https://kriepiekrollie.github.io/set-game/"><h3> Set Game </h3></a>
            <p> A recreation of a card game I like very much </p>
            <p> This project isn't really "done", but it's at the point where it works and I don't want to keep working on it lol.</p>
          </div>
        </div>

        <div className="projectCard">
          <a href="https://kriepiekrollie.github.io/bbbenjamini/">          
            <img src="bbbenjamini.jpg" />
          </a>
          <div className="projectText">
            <a href="https://kriepiekrollie.github.io/bbbenjamini/"><h3> bbbenjamini </h3></a>
            <p> The website I made when I was 13. It's very cringe and it's written in Afrikaans, sorry. </p>
            <p> I remember I mostly made this by copying from a codeninjas book that I had begged my parents to buy me. </p>
          </div>
        </div>

      </div>
    </section>
  );
}
