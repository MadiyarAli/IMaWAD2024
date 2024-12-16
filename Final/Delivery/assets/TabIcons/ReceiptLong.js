import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function ReceiptLong(props) {
  return (
    <Svg
      width={35}
      height={35}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_2_7777)" fill="#fff">
        <Path d="M32.083 2.625L29.167 0 26.25 2.625 23.333 0l-2.916 2.625L17.5 0l-2.917 2.625L11.667 0 8.75 2.625 5.833 0v24.5H0v5.25C0 32.655 2.606 35 5.833 35h23.334C32.394 35 35 32.655 35 29.75V0l-2.917 2.625zm-.972 27.125c0 .962-.875 1.75-1.944 1.75-1.07 0-1.945-.788-1.945-1.75V24.5h-17.5V5.25h21.39v24.5z" />
        <Path d="M23.334 8.75H11.667v3.5h11.667v-3.5zM29.167 8.75h-3.89v3.5h3.89v-3.5zM23.334 14H11.667v3.5h11.667V14zM29.167 14h-3.89v3.5h3.89V14z" />
      </G>
      <Defs>
        <ClipPath id="clip0_2_7777">
          <Path fill="#fff" d="M0 0H35V35H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default ReceiptLong
