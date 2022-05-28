import { GlobalStyle } from "./styles/GlobalStyle";

import { MainContent } from "./components/MainContent/MainContent";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <Header />
        <MainContent />
      </div>
    </>
  );
}

export default App;
