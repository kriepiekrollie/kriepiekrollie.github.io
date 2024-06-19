import { Link } from "react-router-dom";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="scrollSection">
      <div className="sectionContent">
        <h1>Projects</h1>
        <p>Here are some things i've been making for fun that you might find interesting:</p>

        <div className="projectCard">
          <a href="https://github.com/kriepiekrollie/cf-tool">
            <img src="cpsolutions.jpg" />
          </a>
          <div className="projectText">
            <a href="https://github.com/kriepiekrollie/cf-tool"><h3> cf-tool </h3></a>
            <p> I had been wanting to make this tool, and I had been wanting to learn Rust, so why not kill two birds with one stone? </p>
          </div>
        </div>

        <h2>Some Web Stuff</h2>

        <p> I'm not super great at web design but i do dabble every now and then. </p>

        <div className="projectCard">
          <a href="https://kriepiekrollie.github.io/polyhedra/">
            <img src="polyhedra.jpg" />
          </a>
          <div className="projectText">
            <a href="https://kriepiekrollie.github.io/polyhedra/"><h3> Polyhedral Playground </h3></a>
            <p> I wanted to have a fun and pretty way to play with polyhedra so this is what I came up with. </p>
            <p> I've been to lazy to add more shapes. </p>
          </div>
        </div>

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
          <a href="https://kriepiekrollie.github.io/firebase-color/">          
            <img src="colors.png" />
          </a>
          <div className="projectText">
            <a href="https://kriepiekrollie.github.io/firebase-color/"><h3> color together </h3></a>
            <p> My first attempt at making something with firebase. </p>
            <p> This site lets you change the color and have the change be reflected for everyone viewing the site. </p>
            <p> It's very broken lol. </p>
          </div>
        </div>

      </div>
    </section>
  );
}
