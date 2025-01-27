import React from "react";
import "../index.css";

function WeatherCard({ name, message }) {
  return (
    <div className="Card">
      <h1>{name}</h1>
      <p> {message}</p>
    </div>
  );
}

export default WeatherCard;
