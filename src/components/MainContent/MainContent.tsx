import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Bar, BarWrapper, Card, Chart, Main, PopUp } from "./styles";

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
      <Card>
        <h1>Spending - Last 7 days</h1>
        <Chart>
          {data.map(({ day, amount }) => {
            return (
              <BarWrapper key={uuidv4()}>
                <PopUp>${amount}</PopUp>
                <Bar height={amount} role="button" aria-pressed="false" />
                <span>{day}</span>
              </BarWrapper>
            );
          })}
        </Chart>
      </Card>
    </Main>
  );
}
