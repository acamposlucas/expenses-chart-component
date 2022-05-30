import styled from "styled-components";

export const Main = styled.main`
  border-radius: 14px;
  margin: 1rem;
  display: grid;
  row-gap: 1rem;
  grid-template-columns: minmax(350px, 550px);
`;

export const Card = styled.div`
  background-color: var(--pale-orange);
  border-radius: 14px;
  padding: 30px 20px;
  width: 100%;

  h1 {
    font-size: 22px;
    color: var(--dark-brown);
  }
`;
