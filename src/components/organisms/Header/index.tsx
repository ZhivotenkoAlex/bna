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
      <Container>
        <Menu />
        <StyledLogo />
        <UserBlock userName={UserData.name} />
      </Container>
    </Root>
  )
}

const Root = styled.header`
  background: ${Colors.SECONDARY_30};
`
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1398px;
  margin: 0 auto;
  padding: 19px 27px;
  @media screen and (min-width: ${Sizes.TABLET}px) {
    padding: 26px 31px;
  }
`

const StyledLogo = styled(LogoIcon)`
  @media screen and (min-width: ${Sizes.TABLET}px) {
    order: -1;
  }
`
