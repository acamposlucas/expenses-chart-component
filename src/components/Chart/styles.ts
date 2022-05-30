import styled from "styled-components";

export const ChartContainer = styled.div`
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
  left: 50%;
  transform: translateX(-50%);
  top: -35px;
  z-index: 100 !important;
  font-family: "DM Sans", sans-serif;
`;

type BarProps = {
  height: number;
};

export const Bar = styled.button<BarProps>`
  width: 34px;
  border: none;
  height: calc(2.9 * ${(props) => props.height}px);
  border-radius: 4px;
  background-color: var(--soft-red);
  position: relative;
  cursor: pointer;

  &:hover ${PopUp},&:focus ${PopUp} {
    visibility: visible;
  }

  &:hover {
    filter: brightness(1.2);
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
`;
