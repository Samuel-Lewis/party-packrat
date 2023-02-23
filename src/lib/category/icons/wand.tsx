import * as React from "react";
import { SVGProps } from "react";

const SvgWand = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={{
      height: 512,
      width: 512,
    }}
    {...props}
  >
    <path
      d="M373 20c-46.737 0-87.087 26.806-106.564 65.912L206 98l48.11 36.082c-.067 1.632-.11 3.27-.11 4.918 0 20.94 5.387 40.592 14.842 57.666l8.803-22.008 6.17-5.388 16.44-4.11A88.441 88.441 0 0 1 293 130c0-46.01 35.158-84.016 80-88.547L414 34zm105 94-7.453 25c-4.53 44.842-42.538 80-88.547 80a88.39 88.39 0 0 1-35.16-7.256l-4.11 16.44-5.388 6.17-22.008 8.804C332.408 252.613 352.06 258 373 258c1.648 0 3.286-.043 4.918-.11L414 306l12.088-60.436C465.194 226.087 492 185.737 492 139zm-140.37 60.37-44.984 11.245-22.492 56.23 56.23-22.49zm-84.984 30.048-16.503 16.504 16.425 16.426 8.037-20.09a137.72 137.72 0 0 1-7.96-12.84zm-44.054 14.41c-7.608.515-12.517 2.56-15.584 5.63-3.068 3.067-5.114 7.975-5.63 15.583l84.8 84.8c7.608-.515 12.516-2.563 15.584-5.63 3.067-3.07 5.114-7.977 5.63-15.585zm86.154 32.565-20.094 8.04 16.645 16.643 16.568-16.568a137.604 137.604 0 0 1-13.12-8.115zm-105.273 16.2-21.213 21.212 55.154 55.154 21.213-21.214zm-45.254 22.626-21.214 21.212 77.78 77.78L222 368zm-22.628 45.253L18 439.063V494h55.373l103.373-103.373z"
      fill="currentColor"
    />
  </svg>
);
export default SvgWand;