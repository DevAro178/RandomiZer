import { useEffect, useRef, useState } from "react";

const SvgLine = ({ lenis }) => {
  const [pathLength, setPathLength] = useState("");
  const [scrollPercent, setScrollPercent] = useState(0);
  const pathRef = useRef(null);

  lenis.on("scroll", (e) => {
    // console.log(scrollPercentage);
    var drawLength = pathLength * scrollPercent;
    if (pathRef.current) {
      const pathElement = pathRef.current;
      pathElement.style.strokeDashoffset = pathLength - drawLength;
    }
  });

  useEffect(() => {
    if (pathRef.current) {
      const pathElement = pathRef.current;
      // setPathLength(pathElement.getTotalLength() * 0.5);
      setPathLength(pathElement.getTotalLength());
      pathElement.style.opacity = 0;
    }
  }, []);

  useEffect(() => {
    if (pathLength > 0) {
      if (pathRef.current) {
        const pathElement = pathRef.current;
        pathElement.style.strokeDasharray = `${pathLength} ${pathLength}`;
        pathElement.style.strokeDashoffset = pathLength;
        pathElement.style.opacity = 1;
      }
    }
  }, [pathLength]);

  useEffect(() => {
    function handleScroll() {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);
      // const scrollPercentRounded = Math.round(scrollPercent * 100);
      // setScrollPercent(scrollPercentRounded);
      setScrollPercent(scrollPercent);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   console.log(scrollPercent);
  // }, [scrollPercent]);
  return (
    <div className="LineSvg">
      {/* <svg
        viewBox="0 0 1786 5824"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax meet"
      >
        <path
          ref={pathRef}
          d="M1099.7 1.08417C1223.7 -0.635233 1472.76 22.5891 1320.75 201.042C1130.73 424.107 1803.93 598.505 1695.35 424.108C1586.77 249.711 761.557 448.442 1429.33 744.511C1963.55 981.366 913.57 1043.28 321.806 1044.64C114.694 1053.42 -203.184 1141.59 182.192 1423.92C663.912 1776.85 1535.49 1926.94 1482.41 2141.94C1429.33 2356.94 -475.69 3292.03 182.192 3292.03C1629.62 3292.03 310.863 3832.76 879.47 4016.22C1052.88 4072.17 1786.25 3977.45 1748.07 4332.48C1676.92 4993.97 -74.0156 4679.91 119.445 5042.92C361.271 5496.69 1748.07 5666.28 1785.08 5822.12"
          stroke="#EB9928"
          strokeWidth="1.5"
          strokeLinecap="square"
        />
      </svg> */}

      {/* <svg
        viewBox="0 0 1736 3105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax meet"
      >
        <path
          ref={pathRef}
          d="M1125.7 2.08417C1249.7 0.364767 1498.76 23.5891 1346.75 202.042C1156.73 425.107 1829.93 599.505 1721.35 425.108C1612.77 250.711 787.557 449.442 1455.33 745.511C1989.55 982.366 939.57 1044.28 347.806 1045.64C140.694 1054.42 -177.184 1142.59 208.192 1424.92C689.912 1777.85 1561.49 1927.94 1508.41 2142.94C1455.33 2357.94 -469.5 2604.5 111.5 3101.5"
          stroke="#EB9928"
          strokeWidth="4"
          strokeLinecap="square"
        />
      </svg> */}

      <svg
        width="1470"
        height="2278"
        viewBox="0 0 1470 2278"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax meet"
      >
        <path
          ref={pathRef}
          d="M1025.7 2.08417C1149.7 0.364767 1398.76 23.5891 1246.75 202.042C1056.73 425.107 635.581 376.438 527 202.042C418.419 27.6449 -406.794 226.376 260.977 522.445C795.194 759.3 714.964 1412.88 247.806 1045.64C-185.5 705 262.624 240.108 648 522.445C1129.72 875.366 1515.58 781.002 1462.5 996C1409.42 1211 -392.718 1778.04 188.282 2275.04"
          stroke="#EB9928"
          strokeWidth="4"
          strokeLinecap="square"
        />
      </svg>
    </div>
  );
};

export default SvgLine;
