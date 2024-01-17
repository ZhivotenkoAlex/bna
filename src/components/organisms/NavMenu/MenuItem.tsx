import styled from "styled-components"
import { Colors } from "../../../helpers/colors"
import { NavLink, useMatch } from "react-router-dom"
import { NavMenuItem } from "../../../types/userData"

interface PropTypes {
  item: NavMenuItem
}
function MenuItem({ item }: PropTypes) {
  const match = useMatch(item.path)
  const isItemActive = !!match
  return (
    <Item to={item.path} $isActive={isItemActive}>
      {item.label}
    </Item>
  )
}

export default MenuItem

const Item = styled(NavLink)<{ $isActive: boolean }>`
  display: flex;
  padding: 8px 28px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.$isActive === true ? Colors.SECONDARY_20 : "transparent"};
  color: ${Colors.PRIMARY_50};
  cursor: ${(props) => (props.$isActive === true ? "default" : "pointer")};
  font-size: 18px;
  font-weight: 700;
  line-height: 150%;
  text-wrap: nowrap;
  &:hover {
    color: ${(props) =>
      props.$isActive === true ? Colors.PRIMARY_50 : Colors.PRIMARY_90};
  }
`
