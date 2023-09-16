import { useEffect, useRef, useState } from "react";

const SvgLine = ({ lenis }) => {
  //   const [pathLength, setPathLength] = useState("");
  //   const [scrollPercentage, setScrollPercentage] = useState(0);
  //   const pathRef = useRef(null);

  //   lenis.on("scroll", (e) => {
  //     // console.log(scrollPercentage);
  //     var drawLength = pathLength * scrollPercentage;
  //     if (pathRef.current) {
  //       const pathElement = pathRef.current;
  //       pathElement.style.strokeDashoffset = pathLength - drawLength;
  //     }
  //   });

  //   useEffect(() => {
  //     if (pathRef.current) {
  //       const pathElement = pathRef.current;
  //       setPathLength(pathElement.getTotalLength());
  //       pathElement.style.strokeDashArray = pathLength + " " + pathLength;
  //       pathElement.style.strokeDashoffset = pathLength;
  //     }

  //     const handleScroll = () => {
  //       const scrollHeight = document.documentElement.scrollHeight;
  //       const scrollTop =
  //         document.documentElement.scrollTop || document.body.scrollTop;
  //       const windowHeight = document.documentElement.clientHeight;

  //       const totalScrollableHeight = scrollHeight - windowHeight;
  //       const currentScrollPercentage = (scrollTop / totalScrollableHeight) * 100;

  //       setScrollPercentage(currentScrollPercentage);
  //     };

  //     window.addEventListener("scroll", handleScroll);

  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

  return (
    <div className="LineSvg">
      <svg
        viewBox="0 0 1786 5824"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax meet"
      >
        <path
          //   ref={pathRef}
          d="M1099.7 1.08417C1223.7 -0.635233 1472.76 22.5891 1320.75 201.042C1130.73 424.107 1803.93 598.505 1695.35 424.108C1586.77 249.711 761.557 448.442 1429.33 744.511C1963.55 981.366 913.57 1043.28 321.806 1044.64C114.694 1053.42 -203.184 1141.59 182.192 1423.92C663.912 1776.85 1535.49 1926.94 1482.41 2141.94C1429.33 2356.94 -475.69 3292.03 182.192 3292.03C1629.62 3292.03 310.863 3832.76 879.47 4016.22C1052.88 4072.17 1786.25 3977.45 1748.07 4332.48C1676.92 4993.97 -74.0156 4679.91 119.445 5042.92C361.271 5496.69 1748.07 5666.28 1785.08 5822.12"
          stroke="#EB9928"
          strokeWidth="1.5"
          strokeLinecap="square"
        />
      </svg>
    </div>
  );
};

export default SvgLine;
