import { CardSummary } from "./styles";

interface SummaryProps {
  data: never[];
}

export function Summary({ data }: SummaryProps) {
  function calculateTotal() {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += data[i]["amount"];
    }
    return total;
  }

  return (
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
  );
}
