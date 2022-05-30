import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Bar,
  BarWrapper,
  Card,
  CardSummary,
  Chart,
  Main,
  PopUp,
} from "./styles";

export function MainContent() {
  const [data, setData] = useState([]);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((json) => setData(json.data))
      .catch((err) => console.log(err));
  }, []);

  function calculateTotal() {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += data[i]["amount"];
    }
    return total;
  }
  calculateTotal();

  return (
    <Main>
      <Card>
        <h1>Spending - Last 7 days</h1>
        <Chart>
          {data.map(({ day, amount }) => {
            return (
              <BarWrapper key={uuidv4()}>
                <Bar
                  height={amount}
                  role="button"
                  onClick={() => setHidden((e) => !e)}
                >
                  <PopUp>${amount}</PopUp>
                </Bar>
                <span>{day}</span>
              </BarWrapper>
            );
          })}
        </Chart>
        <CardSummary>
          <h2>Total this week</h2>
          <div className="box">
            <span className="total">${calculateTotal()}</span>
            <div className="summary-difference">
              <span>+2.4%</span>
              <p>from last month</p>
            </div>
          </div>
        </CardSummary>
      </Card>
    </Main>
  );
}