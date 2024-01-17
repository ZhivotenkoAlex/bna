import styled from "styled-components"
import MenuItem from "./MenuItem"
import { useMediaQuery } from "../../../hooks/useMediaQuery"
import { Sizes } from "../../../helpers/sizes"
import { SideBar } from "./BurgerMenu"
import { MENU_ITEMS } from "../../../mock/userData"

function Menu() {
  const isBurgerShown = useMediaQuery("min", Sizes.TABLET)

  return isBurgerShown ? (
    <List>
      {MENU_ITEMS.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </List>
  ) : (
    <SideBar>
      {MENU_ITEMS.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </SideBar>
  )
}

const List = styled("ul")`
  display: flex;
  list-style: none;
  justify-content: space-between;
  @media screen and (min-width: ${Sizes.TABLET}px) {
    margin-left: 0;
  }
`

export default Menu
