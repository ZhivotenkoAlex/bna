import styled from 'styled-components'
import LogoIcon from '../../icons/Logo'
import { Colors } from '../../helpers/colors'
import UserBlock from './UserBlock'
import { UserData } from '../../mock/userData'
import Menu from '../Menu/Menu'

export default function Header() {
  return (
    <Root>
      <Menu />
      <LogoIcon />
      <UserBlock userName={UserData.name} />
    </Root>
  )
}

const Root = styled.header`
  background: ${Colors.SECONDARY_30};
  padding: 19px 27px;
  display: flex;
  justify-content: space-between;
`
