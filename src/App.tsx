import styled from 'styled-components'
import MainPage from './components/MainPage'
import { UserData } from './mock/userData'

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
`
