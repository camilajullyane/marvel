import { Container } from "./App.ts";
import HeroCard from "./components/HeroCard/HeroCard.tsx";
import NavBar from "./components/NavBar/NavBar.tsx";
import { GlobalStyle } from "./globalStyle/globalStyle.ts";

function App() {
  return (
    <Container className="container-pai">
      <NavBar />
      <HeroCard />
      <GlobalStyle />
    </Container>
  );
}

export default App;
