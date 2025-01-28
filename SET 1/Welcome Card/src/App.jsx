import React from "react";
import WeatherCard from "./Components/WeatherCard";

function App() {
  return (
    <div>
      <WeatherCard name="PHILLIP" message="WELCOME TO THE LESSON" />
      <WeatherCard name="James" message="Welcome to this world" />
      <WeatherCard name="Anna" message="This is React work." />
    </div>
  );
}

export default App;
