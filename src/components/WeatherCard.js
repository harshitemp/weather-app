export default function WeatherCard({ data }) {
  if (!data) return null;

  // Map weather descriptions to emojis
  const weatherIcons = {
    Sunny: "☀️",
    Cloudy: "☁️",
    Rainy: "🌧️",
    Windy: "🌬️",
    Snow: "❄️"
  };

  // Optional: High/Low temperature symbols
  const tempSymbol = data.temp >= 30 ? "🔥" : data.temp <= 15 ? "❄️" : "🌡️";

  return (
    <div style={styles.card}>
      <h2>{data.city}</h2>
      <p style={styles.temp}>
        {tempSymbol} Temperature: {data.temp}°C
      </p>
      <p>
        {weatherIcons[data.description] || "🌈"} Weather: {data.description}
      </p>
      <p>Humidity: {data.humidity}%</p>
      <p>Wind Speed: {data.wind} m/s</p>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    textAlign: "center",
    maxWidth: "400px",
    margin: "auto",
    marginTop: "20px"
  },
  temp: { fontSize: "1.2rem", fontWeight: "bold" }
};
