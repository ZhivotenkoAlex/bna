import styled from 'styled-components'
import { Sizes } from '../../../helpers/sizes'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../helpers/routes'
import { Colors } from '../../../helpers/colors'

const NotFoundPage = () => {
  return (
    <Container>
      <Title>Ooops...</Title>
      <Subtitle>
        The page you are looking for does not exist or another error has occurred, please return{' '}
        <StyledLink to={ROUTES.HOME}>to the main page</StyledLink>
      </Subtitle>
    </Container>
  )
}

export default NotFoundPage

const Container = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100%;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  text-wrap: balance;
  @media screen and (min-width: ${Sizes.TABLET}px) {
    max-width: 50%;
  }
`

const Title = styled.p`
  font-size: 30px;
  line-height: 36px;
  font-weight: 700;
  color: ${Colors.NEUTRAL_30};
  margin-bottom: 16px;
`

const Subtitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  color: ${Colors.NEUTRAL_30};
`

const StyledLink = styled(Link)`
  text-decoration: underline;
  color: ${Colors.PRIMARY_30};
`
