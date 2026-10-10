import "./index.css";
import Avatar from "./components/avatar";
import Header from "./components/Header";
import AboutSection from "./components/bio";
import SkillsSection from "./components/skills";
import Footer from "./components/footer";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Avatar />
      <AboutSection />
      <SkillsSection />
      <Footer />
    </div>
  );
}

export default App;
