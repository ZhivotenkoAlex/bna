import styled from 'styled-components'
import MainPage from './components/Pages/MainPage'
import { UserData } from './mock/userData'
import { Sizes } from './helpers/sizes'

function App() {
  return (
    <Root>
      <MainPage userData={UserData} />
    </Root>
  )
}

export default App

const Root = styled.div`
  margin: 0 24px;
  @media screen and (min-width: ${Sizes.TABLET}px) {
    margin: 0 34px;
  }
`
