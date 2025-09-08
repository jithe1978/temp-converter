import { useState } from "react";

export default function App() {
  const [f, setF] = useState("");
  const parsed = Number(f);
  const isNum = Number.isFinite(parsed);

  const c = isNum ? ((parsed - 32) * 5) / 9 : "";

  return (
    <div style={{ maxWidth: 520, margin: "40px auto", fontFamily: "system-ui, Arial, sans-serif" }}>
      <h1>Fahrenheit ➜ Celsius</h1>
      <p style={{ color: "#555" }}>Type a Fahrenheit value and I’ll convert it.</p>

      <label htmlFor="f-input" style={{ display: "block", marginBottom: 8 }}>
        Fahrenheit (°F)
      </label>
      <input
        id="f-input"
        type="number"
        step="any"
        value={f}
        onChange={(e) => setF(e.target.value)}
        placeholder="e.g. 98.6"
        style={{
          padding: "10px 12px",
          width: "100%",
          fontSize: 16,
          borderRadius: 8,
          border: "1px solid #444",
          marginBottom: 16,
        }}
      />

      <div style={{ padding: 16, background: "transparent", borderRadius: 8, border: "1px solid #eee" }}>
        <strong>Celsius (°C): </strong>
        {isNum ? c.toFixed(2) : "—"}
      </div>

      <p style={{ marginTop: 16, color: "inherit" }}>
        Formula: <code>(°F − 32) × 5/9 = °C</code>
      </p>
    </div>
  );
}