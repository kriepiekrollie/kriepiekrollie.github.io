import { useRef, useMemo, useState, useEffect } from "react";
import "./Homepage.css";

function Star()
{
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [delay, setDelay] = useState(0);
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    setX(Math.random());
    setY(Math.random());
    setDelay(Math.random());
    setAngle(Math.random());
  }, []);

  return (
    <div className="starWrapper" style={{
      left: (100 * x) + "%", 
      top: (100 * y) + "%", 
      color: "#585b70",
      transform: "rotate(" + 360 * angle + "deg)",
    }}>
      <span className="material-symbols-outlined" style={{
        animationDelay: delay * 5 + "s",
      }}>
        star
      </span>
    </div>
  )
}

function Stars() {
  const [starsArray, setStarsArray] = useState([]);
  useEffect(() => {
    const newStarsArray = [];
    for (let i = 0; i < 100; i++) {
      newStarsArray.push(<Star/>);
    }
    setStarsArray(newStarsArray);
  }, []);
  return (
    <div className="starBackdrop">
      {starsArray}
    </div>
  );
}

function TypeText({ lines, letterTime, lineTime }) {

  const ref = useRef(null);
  const [currentLine, setCurrentLine] = useState(0);
  const [lineProgress, setLineProgress] = useState(0);
  const [onScreen, setOnScreen] = useState(false);

  const observer = useMemo(() => new IntersectionObserver(
    ([entry]) => setOnScreen(entry.isIntersecting)
  ), [ref]);

  useEffect(() => {
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!onScreen) {
      setLineProgress(0);
      setCurrentLine(0);
      return;
    }

    if (currentLine >= lines.length) {
      return;
    } else if (lineProgress >= lines[currentLine].length) {
      setTimeout(() => {
        setLineProgress(0);
        setCurrentLine(currentLine + 1);
      }, lineTime);
    } else {
      setTimeout(() => {
        setLineProgress(lineProgress + 1);
      }, letterTime);
    }
  }, [onScreen, currentLine, lineProgress]);

  return (
    <p ref={ref}>{
      lines.map((line, idx) => {
        if (idx < currentLine) {
          return <>{line}<br/></>;
        } else if (idx == currentLine) {
          return <>{line.substring(0, lineProgress)}<span className="typingCursor">|</span><br/></>;
        } else {
          return <br/>;
        }
      })
    }</p>
  );
}

export default function Homepage() {
  return (
    <>
      <Stars />

      <section className="homeSection">
        <div className="introText">
          <TypeText lines={[
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
      </section>

      <section className="homeSection">
        <div className="infoText">
          <p><span className="italics">name:</span> benjamin kleyn</p>
          <p><span className="italics">pronouns:</span> he/him</p>
          <p><span className="italics">age:</span> 19 years</p>
          <p><span className="italics">location:</span> stellenbosch, south africa</p>
          <p><span className="italics">slay:</span> queen</p>
        </div>
        <img src="benjamin.jpg" alt="a picture of me in hungary" />
      </section>

    </>
  );
}
