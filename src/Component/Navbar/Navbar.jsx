import React from "react";
import "./style.css";
import icon from "./img/Ресурс 2 1 1 (1).svg";
export default function Navbar() {
  return (
    <div>
      <div className="container">
        <header className="navbar">
          <img src={icon} alt="JET24 Logo" className="logo" />
        </header>
      </div>
    </div>
  );
}
