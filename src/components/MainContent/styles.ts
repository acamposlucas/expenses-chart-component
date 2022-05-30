import styled from "styled-components";

export const Main = styled.main`
  border-radius: 14px;
  margin: 1rem;
  max-width: 550px;
  min-width: 345px;
`;

export const Card = styled.div`
  background-color: var(--pale-orange);
  border-radius: 14px;
  padding: 30px 20px;

  h1 {
    font-size: 22px;
    color: var(--dark-brown);
  }
`;

export const Chart = styled.div`
  display: grid;
  color: var(--medium-brown);
  padding-top: 60px;
  padding-bottom: 24px;
  align-items: end;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  border-bottom: 3px solid var(--cream);
`;

export const PopUp = styled.div`
  visibility: hidden;
  background-color: var(--dark-brown);
  color: #fff;
  padding: 0.3rem;
  border-radius: 4px;
  position: absolute;
  top: -35px;
  z-index: 100;
  `;


type BarProps = {
  height: number;
};

export const Bar = styled.div<BarProps>`
  width: 34px;
  height: calc(2.9 * ${(props) => props.height}px);
  border-radius: 4px;
  background-color: var(--soft-red);

  &:hover {
    filter:brightness(1.2);
  }

  &:active,
  &:focus {
    background-color: var(--cyan);
  }
`;

export const BarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:hover ${PopUp}{
    visibility: visible;
  }
`;



export const CardSummary = styled.div`
  padding-top: 24px;

  h2 {
    color: var(--medium-brown);
    font-weight: var(--fw-regular);
    font-size: 16px;
  }

  .box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .total {
      color: var(--dark-brown);
      font-size: 32px;
      font-weight: var(--fw-bold);
    }

    .summary-difference {
      text-align: right;
      span {
        font-size: 14px;
        color: var(--dark-brown);
        font-weight: var(--fw-bold);
      }
      p {
        font-size: 14px;
        color: var(--medium-brown);
      }
    }
  }
`;
