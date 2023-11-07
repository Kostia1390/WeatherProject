/* eslint-disable import/no-extraneous-dependencies */
import { PropsWithChildren } from 'react'
import { Text, TextStyle } from 'react-native'
import styled from '@emotion/native'

interface TypographyProps extends PropsWithChildren, TextStyle {
  f10?: boolean;
  f11?: boolean;
  f12?: boolean;
  f13?: boolean;
  f14?: boolean;
  f15?: boolean;
  f16?: boolean;
  f17?: boolean;
  f20?: boolean;
  f22?: boolean;
  f24?: boolean;
  f27?: boolean;
  f29?: boolean;
  f64?: boolean;
  light?: boolean;
  normal?: boolean;
  medium?: boolean;
  semibold?: boolean;
  bold?: boolean;
  extraBold?: boolean;
  underline?: boolean;
}

type FontSizeKeys = 'f10' |'f11' | 'f12' | 'f13' | 'f14' | 'f15' | 'f16' | 'f17' | 'f20' | 'f22' | 'f24' | 'f27' | 'f29' | 'f64';
type FontWeightKeys = 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extraBold';

const fontSizeMap: Record<FontSizeKeys, string> = {
  f10: '10px',
  f11: '11px',
  f12: '12px',
  f13: '13px',
  f14: '14px',
  f15: '15px',
  f16: '16px',
  f17: '17px',
  f20: '20px',
  f22: '22px',
  f24: '24px',
  f27: '27px',
  f29: '29px',
  f64: '64px',
}

const fontWeightMap: Record<FontWeightKeys, number> = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extraBold: 800,
}

export const Typography = styled(Text)<TypographyProps>`
  ${({ ...props }) => {
    const fontSizeKey = Object
      .keys(props).find(prop => Object.prototype
        .hasOwnProperty.call(fontSizeMap, prop)) as FontSizeKeys | undefined
    const fontWeightKey = Object
      .keys(props).find(prop => Object.prototype
        .hasOwnProperty.call(fontWeightMap, prop)) as FontWeightKeys | undefined

    const styles: any = {
      fontSize: parseInt(fontSizeMap[fontSizeKey!] || '22', 10),
      fontWeight: fontWeightMap[fontWeightKey!] || 400,
      marginLeft: props.marginLeft || 0,
      marginTop: props.marginTop || 0,
      marginRight: props.marginRight || 0,
      marginBottom: props.marginBottom || 0,
      opacity: props.opacity || 1,
      textDecorationLine: props.underline ? 'underline' : 'none',
      justifyContent: props.justifyContent || 'flex-start',
      color: props.color || '#2c2c2c',
      textAlign: props.textAlign || 'left',

    }

    return styles
  }}
`
