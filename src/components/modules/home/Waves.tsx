// Inspired by: https://www.cssscript.com/animated-waves-svg/
export const Waves = () => {
  return (
    <svg
      className="waves"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      shapeRendering="auto"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g className="parallax">
        <use
          xlinkHref="#gentle-wave"
          id="wave1"
          x="48"
          y="0"
        />
        <use
          xlinkHref="#gentle-wave"
          id="wave2"
          x="48"
          y="3"
        />
        <use
          xlinkHref="#gentle-wave"
          id="wave3"
          x="48"
          y="5"
        />
        <use
          xlinkHref="#gentle-wave"
          id="wave4"
          x="48"
          y="7"
        />
      </g>
    </svg>
  );
};
