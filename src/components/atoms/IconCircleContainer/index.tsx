import { ReactNode } from 'react'
import styled from 'styled-components'
import { IconColors } from '../../../helpers/colors'
type ColorType = 'light' | 'normal' | 'dark'

type PropType = {
  color?: ColorType
  children: ReactNode
}

export default function IconCircleContainer({ color = 'normal', children }: PropType) {
  return <Root $bgColor={color}>{children}</Root>
}

const Root = styled.div<{ $bgColor: ColorType }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 8px;
  background: ${prop => IconColors[prop.$bgColor]};
  border-radius: 50%;
`
