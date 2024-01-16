import styled from 'styled-components'
import LogoIcon from '../../../icons/Logo'
import { Colors } from '../../../helpers/colors'
import UserBlock from './UserBlock'
import { UserData } from '../../../mock/userData'
import Menu from '../NavMenu/Menu'
import { Sizes } from '../../../helpers/sizes'

export default function Header() {
  return (
    <Root>
      <Menu />
      <StyledLogo />
      <UserBlock userName={UserData.name} />
    </Root>
  )
}

const Root = styled.header`
  display: flex;
  background: ${Colors.SECONDARY_30};
  padding: 19px 27px;
  justify-content: space-between;
  @media screen and (min-width: ${Sizes.TABLET}px) {
    padding: 26px 31px;
  }
`

const StyledLogo = styled(LogoIcon)`
  @media screen and (min-width: ${Sizes.TABLET}px) {
    order: -1;
  }
`
