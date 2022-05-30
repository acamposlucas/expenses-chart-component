import styled from "styled-components";
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
