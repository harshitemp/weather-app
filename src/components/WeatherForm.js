import { useState } from "react";

export default function WeatherForm({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.toLowerCase());
      setCity("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={styles.input}
        required
      />
      <button type="submit" style={styles.button}>Search</button>
    </form>
  );
}

const styles = {
  form: { display: "flex", justifyContent: "center", marginBottom: "20px" },
  input: { padding: "10px", width: "200px", borderRadius: "5px", border: "1px solid #ccc", marginRight: "10px" },
  button: { padding: "10px 20px", borderRadius: "5px", border: "none", backgroundColor: "#4CAF50", color: "#fff", fontWeight: "bold", cursor: "pointer" }
};
