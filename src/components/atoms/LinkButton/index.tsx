import { ReactNode } from 'react'
import styled from 'styled-components'
import { Colors } from '../../../helpers/colors'
import { Link } from 'react-router-dom'

type ButtonType = 'active' | 'inactive' | 'secondary'

const ButtonColors = {
  active: {
    color: Colors.SECONDARY_100,
    background: Colors.PRIMARY_30,
    border: Colors.PRIMARY_30,
    hoverColor: Colors.PRIMARY_20,
    shadow: 'none',
  },
  inactive: {
    color: Colors.PRIMARY_20,
    background: 'none',
    border: Colors.PRIMARY_30,
    hoverColor: Colors.PRIMARY_20,
    shadow: 'none',
  },
  secondary: {
    color: Colors.PRIMARY_50,
    background: Colors.NEUTRAL_30,
    border: Colors.NEUTRAL_30,
    hoverColor: Colors.PRIMARY_80,
    shadow: Colors.PRIMARY_30,
  },
}

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
