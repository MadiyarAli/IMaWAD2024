import * as React from 'react'
import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg'

const DrinksIcon = ({ color }) => (
  <Svg
    width={25}
    height={25}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <Path fill="url(#pattern0_120_815)" d="M0 0H25V25H0z" />
    <Defs>
      <Pattern
        id="pattern0_120_815"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_120_815" transform="scale(.00195)" />
      </Pattern>
      <Image
        id="image0_120_815"
        width={512}
        height={512}
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
)

export default DrinksIcon
