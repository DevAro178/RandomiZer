import { useEffect, useState } from "react";
import { StringFromArray } from "./logics";
import SplitType from "split-type";
import gsap from "gsap";

const CardSection = () => {
  const [hash, setHash] = useState(
    "KQrNhgD7p&kj8UTTU#jNHQZRGWN4evsK2XuMggc8JvqDm8y7n496MjKwp!pn38OVQWzD6$=d6YBXPJHnpO3PUC$Hz%cotcZ+=jmZB=Tq6cWfz2rwV8gM8%y#U9mXTga2#Es0NMfxw6eRJ&jQMMeOf$B@4_f13W0ffS0QFuCCYSr%4"
  );
  useEffect(() => {
    const text = new SplitType("#textRandomGen");

    gsap.to("#textRandomGen .char", {
      opacity: 1,
      stagger: 0.1,
      delay: 0.001,
      duration: 0.1,
    });

    let myInterval = setInterval(() => {
      let string = StringFromArray();
      setHash(string);
    }, 20000);

    return () => {
      clearInterval(myInterval);
    };
  }, [hash]);

  return (
    <div className="w50 ObjHero">
      <div className="Sphere"></div>
      <div className="RandomCard">
        <div className="textLabel">Random Password:</div>
        <div id="textRandomGen">{hash}</div>
      </div>
    </div>
  );
};

export default CardSection;
