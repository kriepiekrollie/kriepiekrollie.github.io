import "./Projects.css";

export default function Projects() {
  return (
    <section className="projectSection">
      <div>
        <h1>This site is very much a work in progress lol.</h1>
        <p>Here are some things i've been making for fun that you might find interesting:</p>
        <div className="projectItem">
          <img src="polyhedra.jpg" />
          <div className="projectText">
            <a href="kriepiekrollie.github.io/polyhedra"><h2> Polyhedral Playground </h2></a>
            <p> I wanted to create a fun and pretty way to play with polyhedra so this is what I came up with. </p>
            <p> I'm still adding shapes and I hope to have a huge catalog and more cool features by the end. </p>
          </div>
        </div>
        <div className="projectItem">
          <img src="setgame.jpg" />
          <div className="projectText">
            <a href="kriepiekrollie.github.io/setgame"><h2> Set Game </h2></a>
            <p> A recreation of a card game I like very much </p>
            <p> This project is kinda abandoned but it works fine and was more of a way for me to practice webdev.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
