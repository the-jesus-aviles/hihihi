import "./styles.css";
import { useState } from "react";

export default function App() {
  const [hourlyRate, setHourlyRate] = useState(0);
  const [hours, setHours] = useState(0);

  return (
    <center>
      <div style={{ width: "fit-content" }} className="App">
        <h1>Papaito Wage Calculator</h1>
        <div style={{ textAlign: "left" }}>
          Hourly Rate: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            onChange={(event) =>
              setHourlyRate(parseInt(event.target.value, 10))
            }
            placeholder="USD / hour"
          ></input>
          <br />
          Hours / day: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            onChange={(event) => setHours(parseInt(event.target.value, 10))}
            placeholder="Hours per day"
          ></input>
          <br />
          Annual income: &nbsp;{hours * hourlyRate * 5 * 4 || 0}
          <br />
          Monthly income: {hours * hourlyRate * 5 * 4 * 12 || 0}
        </div>
      </div>
    </center>
  );
}
