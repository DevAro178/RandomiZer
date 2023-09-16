import "./App.css";
import BackgroundImg from "./components/BackgroundImg";

import Lenis from "@studio-freight/lenis";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PasswordGenSection from "./components/PasswordGenSection";
import SvgLine from "./components/SvgLine";

function App() {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return (
    <>
      {/* <SvgLine lenis={lenis} /> */}
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
