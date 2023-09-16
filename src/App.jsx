import "./App.css";
import BackgroundImg from "./components/BackgroundImg";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PasswordGenSection from "./components/PasswordGenSection";

function App() {
  return (
    <>
      <BackgroundImg />
      <div className="container">
        <Header />
        <HeroSection />
        <PasswordGenSection />
      </div>
    </>
  );
}

export default App;
