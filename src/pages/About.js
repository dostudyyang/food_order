import React from "react";
import "../styles/About.css";
import topImage from "../assets/topImage.png";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${topImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          Savor the rich and diverse flavors of authentic Chinese cuisine at our
          restaurant in the heart of Toronto. We bring the vibrant culinary
          traditions of China to your table. Enjoy a modern twist on classic
          dishes, expertly prepared by our skilled chefs, and experience the
          warmth and hospitality that define our establishment. Indulge in the
          best of Chinese cuisine at Our Restaurant —where Toronto meets China
          in a delightful blend of taste and culture.
        </p>
      </div>
    </div>
  );
}

export default About;
