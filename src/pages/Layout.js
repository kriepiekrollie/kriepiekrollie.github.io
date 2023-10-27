import { useState } from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
  const [hiddenNavbar, setHiddenNavbar] = useState(true);
  const navigate_ = useNavigate();
  const navigate = (path) => {
    navigate_(path);
    window.scrollTo(0, 0);
    setHiddenNavbar(true);
  };

  return (
    <>
      <div className="topBar" />
      <div className="homeButton" onClick={() => navigate("/")}>
        <span className="material-symbols-outlined">
          home
        </span>
      </div>

      <div className="menuButton" onClick={() => setHiddenNavbar(!hiddenNavbar)}>
        <span className="material-symbols-outlined">
          {hiddenNavbar ? "menu" : "close"}
        </span>
      </div>

      <div className={`navBar${hiddenNavbar ? " hidden" : ""}`}> 
        <div className="navBarItemContainer">
          <div className="navBarItem" onClick={() => navigate("/")}> Homepage </div>
          <div className="navBarItem" onClick={() => navigate("/Projects")}> Projects </div>
          <div className="navBarItem" onClick={() => navigate("/Interests")}> Interests </div>
          <div className="navBarItem" onClick={() => navigate("/Olympiads")}> Olympiads </div>
          <div className="navBarItem" onClick={() => navigate("/Socials")}> Socials </div>
        </div>
      </div>

      <Outlet />
    </>
  );
}
