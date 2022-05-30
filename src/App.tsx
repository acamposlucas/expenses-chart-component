import { Container, GlobalStyle } from "./styles/GlobalStyle";
import { MainContent } from "./components/MainContent";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <MainContent />
      </Container>
    </>
  );
}

export default App;
