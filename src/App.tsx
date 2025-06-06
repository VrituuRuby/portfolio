import { ContentSection } from "./components/sections/content";
import { HeroSection } from "./components/sections/hero";
import { GlobalStyle } from "./styles/global-style";

function App() {
  return (
    <>
      <GlobalStyle />
      <HeroSection />
      <ContentSection></ContentSection>
    </>
  );
}

export default App;
