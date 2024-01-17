import Button from "../../atoms/Button"
import { FilterType } from "../../../types/userData"

type ButtonType = "active" | "inactive" | "secondary"

type PropType = {
  variant?: ButtonType
  fullwidth?: boolean
  onClick?: (name: FilterType) => void
  children: FilterType
}

export default function FilterButton({ onClick, ...props }: PropType) {
  const handleClick = () => onClick?.(props.children)
  return <Button onClick={handleClick} {...props} />
}
