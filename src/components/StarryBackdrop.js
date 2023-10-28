import { useState, useEffect } from "react";
import "./StarryBackdrop.css";

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

export default function StarryBackdrop() {
  const [starsArray, setStarsArray] = useState([]);
  useEffect(() => {
    const newStarsArray = [];
    for (let i = 0; i < 100; i++) {
      newStarsArray.push(<Star/>);
    }
    setStarsArray(newStarsArray);
  }, []);
  return (
    <div className="starryBackdrop">
      {starsArray}
    </div>
  );
}
