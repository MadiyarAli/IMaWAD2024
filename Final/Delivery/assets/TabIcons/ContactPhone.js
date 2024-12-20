import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg'

const ContactPhone = ({ color }) => (
  <Svg
    width={35}
    height={35}
    viewBox="0 0 35 35"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"s
  >
    <G clipPath="url(#clip0_2_7785)">
      <Path
        d="M32.083 0H2.917C1.313 0 0 1.75 0 3.889V31.11C0 33.25 1.313 35 2.917 35h29.166c1.605 0 2.902-1.75 2.902-3.889L35 3.89C35 1.75 33.687 0 32.083 0zM11.667 5.833c2.42 0 4.375 2.606 4.375 5.834 0 3.227-1.955 5.833-4.375 5.833-2.421 0-4.375-2.606-4.375-5.833 0-3.228 1.954-5.834 4.375-5.834zm8.75 23.334h-17.5v-1.945c0-3.889 5.833-6.028 8.75-6.028 2.916 0 8.75 2.14 8.75 6.028v1.945zm5.614-7.778h2.392l2.202 3.889-2.902 3.87c-1.91-1.906-3.325-4.629-3.981-7.76a18.84 18.84 0 01-.409-3.888c0-1.342.146-2.644.409-3.889.656-3.15 2.07-5.853 3.98-7.758l2.903 3.87-2.202 3.888H26.03a15.325 15.325 0 00-.51 3.889c0 1.361.19 2.664.51 3.889z"
        fill={color}
      />
    </G>
    <Defs>
      <ClipPath id="clip0_2_7785">
        <Path fill={color} d="M0 0H35V35H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default ContactPhone
