import { useEffect, useState } from "react";
import { Chart } from "../Chart";
import { Header } from "../Header";
import { Summary } from "../Summary";

import { Card, Main } from "./styles";

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
      <Header />
      <Card>
        <h1>Spending - Last 7 days</h1>
        <Chart data={data} />
        <Summary data={data} />
      </Card>
    </Main>
  );
}
