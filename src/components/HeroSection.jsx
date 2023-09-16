import { useEffect, useState } from "react";
import arrowRight from "../assets/arrow-right.png";
import { StringFromArray } from "./logics";

const HeroSection = () => {
  const [hash, setHash] = useState(
    "KQrNhgD7p&kj8UTTU#jNHQZRGWN4evsK2XuMggc8JvqDm8y7n496MjKwp!pn38OVQWzD6$=d6YBXPJHnpO3PUC$Hz%cotcZ+=jmZB=Tq6cWfz2rwV8gM8%y#U9mXTga2#Es0NMfxw6eRJ&jQMMeOf$B@4_f13W0ffS0QFuCCYSr%4"
  );

  useEffect(() => {
    let myInterval = setInterval(() => {
      let string = StringFromArray();
      setHash(string);
    }, 2000);

    return () => {
      clearInterval(myInterval);
    };
  }, [hash]);

  return (
    <div className="HeroSection spacer-bottom">
      <div className="textHero">
        <h1>
          Secure Your Digital Footprint: Generate Strong Passwords in a Flash!
        </h1>
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
      <div className="ObjHero">
        <div className="Sphere"></div>
        <div className="RandomCard">
          <div className="textLabel">Random Password:</div>
          <div className="textRandomGen">{hash}</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
