declare module '*.svg' {
  import React from 'react'
  import { SvgProps } from 'react-native-svg'

  const content: React.FC<SvgProps>
  // eslint-disable-next-line import/no-default-export
  export default content
}

declare module '*.png' {
  const value: any
  export = value;
}
