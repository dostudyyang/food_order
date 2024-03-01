//import { backdropClasses } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import backgroudImage from "../assets/RegionalChinese.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${backgroudImage})` }}>
      <div className="headerContainer">
        <h1>
          <b>Food Corner</b>
        </h1>
        <p>
          <b>CHINESE FOOD AT A CLICK</b>
        </p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
