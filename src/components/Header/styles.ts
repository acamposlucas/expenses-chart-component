import styled from "styled-components";

export const Container = styled.header`
  padding: 24px 20px;
  background-color: var(--soft-red);
  border-radius: 14px;
  color: #fff;
  margin: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .balance {
    span {
      font-size: 24px;
      font-weight: var(--fw-bold);
    }
  }

  .circles {
    position: relative;
    width: 60px;
    height: 40px;
    .brown,
    .white {
      height: 40px;
      width: 40px;
      background-color: transparent;
      border: 2px solid transparent;
      border-radius: 100%;
      position: absolute;
    }
    .white {
      border-color: white;
      z-index: 100;
    }

    .brown {
      background-color: var(--dark-brown);
      left: 20px;
    }
  }
`;
