import { ReactNode } from 'react'
import styled from 'styled-components'
import { ButtonColors } from '../../../helpers/colors'

type ButtonType = 'active' | 'inactive' | 'secondary'

type PropType = {
  children: ReactNode
  variant?: ButtonType
  fullWidth?: boolean
  onClick?: () => void
  disabled?: boolean
}

export default function Button({
  variant = 'inactive',
  fullWidth = false,
  onClick,
  children,
  disabled = false,
}: PropType) {
  return (
    <Root $variant={variant} $fullWidth={fullWidth} onClick={onClick} disabled={disabled}>
      <Title>{children}</Title>
    </Root>
  )
}

const Root = styled.button<{ $variant: ButtonType; $fullWidth: boolean }>`
  width: ${prop => (prop.$fullWidth ? '100%' : 'fit-content')};
  max-width: 320px;
  display: flex;
  padding: 10px 24px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${prop => ButtonColors[prop.$variant].border};
  border-radius: 20px;
  color: ${prop => ButtonColors[prop.$variant].color};
  background: ${prop => ButtonColors[prop.$variant].background};
  cursor: pointer;
  font-weight: 700;
  transition: all 1s ease;
  &:hover {
    border-color: ${prop => ButtonColors[prop.$variant].hoverColor};
    color: ${prop => ButtonColors[prop.$variant].hoverColor};
    scale: 0.98;
    box-shadow: 0 0 5px 0 ${prop => ButtonColors[prop.$variant].shadow};
  }
`

const Title = styled.p`
  font-family: Poppins;
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
`
