import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Main } from "./styles";

export function MainContent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((json) => setData(json.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Main>
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
    </Main>
  );
}
