import { ChartContainer, BarWrapper, Bar, PopUp } from "./styles";
import { v4 as uuidv4 } from "uuid";
interface ChartProps {
  data: never[];
}

export function Chart({ data }: ChartProps) {
  return (
    <ChartContainer>
      {data.map(({ day, amount }) => {
        return (
          <BarWrapper key={uuidv4()}>
            <Bar height={amount} aria-labelledby={`$${amount}`}>
              <PopUp id={`$${amount}`}>${amount}</PopUp>
            </Bar>
            <span>{day}</span>
          </BarWrapper>
        );
      })}
    </ChartContainer>
  );
}
