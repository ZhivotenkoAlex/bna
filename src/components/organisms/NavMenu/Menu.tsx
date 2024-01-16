import styled from 'styled-components'
import MenuItem from './MenuItem'
import { useMediaQuery } from '../../../hooks/useMediaQuery'
import { Sizes } from '../../../helpers/sizes'
import { SideBar } from './BurgerMenu'

function Menu() {
  const isBurgerShown = useMediaQuery('min', Sizes.TABLET)
  const MENU_ITEMS = [
    {
      id: 0,
      label: 'Home',
      path: '/',
    },
    {
      id: 1,
      label: 'XEPPT Card',
      path: '/card',
    },
    {
      id: 2,
      label: 'Statements',
      path: '/statements',
    },
  ]
  return isBurgerShown ? (
    <List>
      {MENU_ITEMS.map(item => (
        <MenuItem key={item.id} item={item} />
      ))}
    </List>
  ) : (
    <SideBar>
      {MENU_ITEMS.map(item => (
        <MenuItem key={item.id} item={item} />
      ))}
    </SideBar>
  )
}

const List = styled('ul')`
  display: flex;
  list-style: none;
  gap: 1.5rem;
  @media (max-width: 1439px) {
    margin-left: 0;
    gap: 1.2rem;
  }
`

export default Menu
