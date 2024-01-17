import { Outlet } from 'react-router-dom'
import Header from '../../organisms/Header'
import styled from 'styled-components'
import { Sizes } from '../../../helpers/sizes'

export default function Layout() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}

const Container = styled.main`
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  height: 100%;
  @media screen and (min-width: ${Sizes.TABLET}px) {
    margin: 0 auto;
    padding: 0 34px;
  }
`
