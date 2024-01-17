import styled from 'styled-components'
import MainPage from './components/Pages/MainPage'
import { UserData } from './mock/userData'
import { Sizes } from './helpers/sizes'
import GlobIcon from './icons/GlobIcon'
import { useMediaQuery } from './hooks/useMediaQuery'

function App() {
  const isWideScreen = useMediaQuery('min', Sizes.LAPTOP)
  return (
    <Root>
      <MainPage userData={UserData} />
      {isWideScreen && <StyledGlobIcon />}
    </Root>
  )
}

export default App

const Root = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 24px;
  @media screen and (min-width: ${Sizes.TABLET}px) {
    margin: 0 auto;
    padding: 0 34px;
  }
  position: relative;
`

const StyledGlobIcon = styled(GlobIcon)`
  position: absolute;
  bottom: 0px;
  right: 0px;
  @media screen and (min-width: ${Sizes.TABLET}px) {
    width: 300px;
    height: 300px;
  }
  @media screen and (min-width: ${Sizes.LAPTOP}px) {
    width: 536px;
    height: 536px;
  }
`
