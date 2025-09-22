import { useState } from "react";
import WeatherForm from "../components/WeatherForm";
import WeatherCard from "../components/WeatherCard";

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  // Simulated weather data
  const weatherData = {
    london: { city: "London", temp: 15, description: "Cloudy", humidity: 70, wind: 5 },
    paris: { city: "Paris", temp: 18, description: "Sunny", humidity: 60, wind: 3 },
    bangalore: { city: "Bangalore", temp: 28, description: "Rainy", humidity: 80, wind: 6 },
    newyork: { city: "New York", temp: 22, description: "Windy", humidity: 65, wind: 7 }
  };

  const fetchWeather = (city) => {
    if (weatherData[city]) {
      setWeather(weatherData[city]);
      setError("");
    } else {
      setWeather(null);
      setError("City not found!");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Weather App</h1>
      <WeatherForm onSearch={fetchWeather} />
      {error && <p style={{ color: "red", marginTop: "20px" }}>{error}</p>}
      {weather && <WeatherCard data={weather} />}
    </div>
  );
}

const styles = {
  container: {
    padding: "50px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: "center",
    backgroundColor: "#f0f4f8",
    minHeight: "100vh"
  },
  title: { marginBottom: "30px", color: "#333" }
};
