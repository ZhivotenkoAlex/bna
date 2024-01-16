import { ReactNode } from 'react'
import Button from '../../atoms/Button'

type ButtonType = 'active' | 'inactive' | 'secondary'

type PropType = {
  variant?: ButtonType
  fullwidth?: boolean
  onClick?: (name: ReactNode) => void
  children: ReactNode
}

export default function FilterButton({ onClick, ...props }: PropType) {
  const handleClick = () => onClick?.(props.children)
  return <Button onClick={handleClick} {...props} />
}
