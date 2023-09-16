import arrowRight from "../assets/arrow-right.png";
import SplitType from "split-type";
import gsap from "gsap";
import CardSection from "./CardSection";
import { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    const text = new SplitType("#HeadingAnim");

    gsap.to("#HeadingAnim .char", {
      y: 0,
      stagger: 0.05,
      delay: 1,
      duration: 0.1,
    });

    gsap.to("#HeadingAnim", {
      opacity: 1,
      stagger: 0.05,
      delay: 0.2,
      duration: 0.1,
    });
  }, []);

  return (
    <div className="HeroSection spacer-bottom">
      <div className="w50 textHero">
        <div id="HeadingAnim">
          Secure Your Digital Footprint: Generate Strong Passwords in a Flash!
        </div>
        <p>
          Take control of your digital safety with our state-of-the-art password
          generator. Dont settle for weak and vulnerable passwords anymore. Our
          advanced algorithm generates highly secure and unpredictable passwords
          that are virtually impossible to crack. Safeguard your valuable
          information and shield your online accounts from unauthorized access.
          Experience the peace of mind that comes with robust password
          protection. Get started now and elevate your online security to the
          next level!
        </p>
        <button>
          Generate Password <img src={arrowRight} alt="arrowRight" />
        </button>
      </div>
      <CardSection />
    </div>
  );
};

export default HeroSection;
