import React from "react";
import "../index.css"

function WeatherCard({ link, temperature, condition }) {
  return (
    <>
    
    <div className="Card">
      <h1>{temperature}</h1>
      <p> {condition}</p>
      <img src={link} alt={condition} />
    </div>
    </>
  );
}

export default WeatherCard;
