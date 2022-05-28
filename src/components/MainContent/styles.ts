import styled from "styled-components";

export const Main = styled.main`
  border-radius: 14px;
  margin: 1rem;
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

type Props = {
  height: number;
};

export const PopUp = styled.div`
  background-color: var(--dark-brown);
  color: #fff;
  padding: 0.2rem;
  border-radius: 4px;
  position: absolute;
  top: -35px;
  visibility: hidden;
`;

export const Bar = styled.div<Props>`
  width: 34px;
  height: calc(2.9 * ${(props) => props.height}px);
  border-radius: 4px;
  background-color: var(--soft-red);

  &:hover,
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
`;
