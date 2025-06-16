import { AboutSection } from "./components/sections/about";
import { ContactFormSection } from "./components/sections/contact-form";
import { ContentSection } from "./components/sections/content";
import { HeroSection } from "./components/sections/hero";
import { ProjectsSection } from "./components/sections/projects";
import { GlobalStyle } from "./styles/global-style";

function App() {
  return (
    <>
      <GlobalStyle />
      <HeroSection />
      <ContentSection>
        <AboutSection />
        <ProjectsSection />
        <ContactFormSection />
      </ContentSection>
    </>
  );
}

export default App;
