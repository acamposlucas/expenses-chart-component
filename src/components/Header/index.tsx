import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <div className="balance">
        <p>My balance</p>
        <span>$921.48</span>
      </div>
      <div className="circles">
        <div className="white"></div>
        <div className="brown"></div>
      </div>
    </Container>
  );
}
