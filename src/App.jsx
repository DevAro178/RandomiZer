import "./App.css";
import BackgroundImg from "./components/BackgroundImg";

import Lenis from "@studio-freight/lenis";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PasswordGenSection from "./components/PasswordGenSection";

function App() {
  const lenis = new Lenis();

  // lenis.on("scroll", (e) => {
  //   console.log(e);
  // });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
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
