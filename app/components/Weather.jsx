// components/Weather.js
"use client";
import { useState, useEffect } from "react";

const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = "bd5e378503939ddaee76f12ad7a97608";

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, [city]); // The effect will re-run if the 'city' prop changes

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { name, main, weather } = weatherData;

  return (
    <div className="bg-slate-600 text-white font-semibold text-center py-4">
      <h2 className="text-2xl">Weather in {name}</h2>
      <p>Temperature: {main.temp}°C</p>
      <p>Weather: {weather[0].description}</p>
    </div>
  );
};

export default Weather;
