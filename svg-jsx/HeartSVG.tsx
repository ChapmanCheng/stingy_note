import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function HeartSVG(props: SvgProps) {
  return (
    <Svg
      width={31}
      height={25}
      viewBox="0 0 31 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.377 23.958c3.08-.915 6.598-3.626 9.37-7.542 4.447-6.28 5.293-13.282 1.89-15.638-3.17-2.196-8.91.414-13.275 5.859C10.997 1.192 5.258-1.418 2.088.777c-3.403 2.357-2.557 9.359 1.889 15.64 2.772 3.915 6.29 6.627 9.371 7.541.612.247 1.29.356 2.013.338.726.018 1.404-.091 2.016-.338z"
        fill="#FFF0F0"
        fillOpacity={0.3}
      />
    </Svg>
  )
}

export default HeartSVG
