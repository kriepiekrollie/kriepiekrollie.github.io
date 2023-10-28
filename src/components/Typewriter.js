import { useRef, useMemo, useState, useEffect } from "react";
import "./Typewriter.css";

export default function Typewriter({ lines, letterTime, lineTime }) {

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
    <div className="typewriter" ref={ref}>{
      lines.map((line, idx) => {
        if (idx < currentLine) {
          return <>{line}<br/></>;
        } else if (idx == currentLine) {
          return <>{line.substring(0, lineProgress)}<span className="typewriterCursor">|</span><br/></>;
        } else {
          return <br/>;
        }
      })
    }</div>
  );
}
