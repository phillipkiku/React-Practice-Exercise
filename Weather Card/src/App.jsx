import React from "react";
import WeatherCard from "./Components/WeatherCard";

function App() {
  return (
    <div>
      <WeatherCard
        temperature="30'"
        condition="Sunny"
        link="https://images.pexels.com/photos/1198507/pexels-photo-1198507.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
      <WeatherCard temperature="-10" condition="Winter" link="https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <WeatherCard temperature="0" condition="Rainy" link="https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&w=600" />
      <WeatherCard temperature="10" condition="Cloudy" link="https://media.premiumtimesng.com/wp-content/files/2017/10/mostlycloudy.jpg" />
    </div>
  );
}

export default App;

