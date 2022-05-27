import { GlobalStyle } from "./styles/GlobalStyle";

import { MainContent } from "./components/MainContent/MainContent";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainContent />
    </>
  );
}

export default App;
