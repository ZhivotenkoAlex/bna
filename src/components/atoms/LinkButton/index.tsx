import { ReactNode } from 'react'
import styled from 'styled-components'
import { ButtonColors } from '../../../helpers/colors'
import { Link } from 'react-router-dom'

type ButtonType = 'active' | 'inactive' | 'secondary'

type PropType = {
  to: string
  children: ReactNode
  variant?: ButtonType
  fullWidth?: boolean
  onClick?: () => void
  disabled?: boolean
}

export default function LinkButton({
  to,
  variant = 'inactive',
  fullWidth = false,
  children,
}: PropType) {
  return (
    <Root to={to} $variant={variant} $fullWidth={fullWidth}>
      {children}
    </Root>
  )
}

const Root = styled(Link)<{ $variant: ButtonType; $fullWidth: boolean }>`
  width: ${prop => (prop.$fullWidth ? '100%' : 'fit-content')};
  max-width: 320px;
  display: flex;
  padding: 10px 24px;
  justify-content: center;
  border-radius: 20px;
  color: ${prop => ButtonColors[prop.$variant].color};
  background: ${prop => ButtonColors[prop.$variant].background};
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  transition: all 1s ease;
  &:hover {
    color: ${prop => ButtonColors[prop.$variant].hoverColor};
    scale: 0.98;
    box-shadow: 0 0 5px 0 ${prop => ButtonColors[prop.$variant].shadow};
  }
`
