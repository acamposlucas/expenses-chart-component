import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((json) => setData(json.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>day</th>
            <th>amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ day, amount }) => (
            <tr key={uuidv4()}>
              <td>{day}</td>
              <td>{amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
