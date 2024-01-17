import styled from 'styled-components'
import { Colors } from '../../../helpers/colors'
import IconCircleContainer from '../../atoms/IconCircleContainer'
import AddLineIcon from 'remixicon-react/AddLineIcon'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../helpers/routes'

export default function EmptyBankCard() {
  return (
    <Root to={ROUTES.ORDER_CARD}>
      <Container>
        <IconCircleContainer color="dark">
          <AddLineIcon color={Colors.PRIMARY_50} />
        </IconCircleContainer>
        <Title>Order a new card</Title>
      </Container>
    </Root>
  )
}

const Root = styled(Link)`
  min-width: 256px;
  height: 160px;
  border-radius: 15px;
  background: ${Colors.PRIMARY_100};
  border: 1px solid ${Colors.SECONDARY_80};
  transition: all 0.5s ease-in-out;
  &:hover {
    box-shadow:
      0 0 2px 0 ${Colors.PRIMARY_30},
      inset 0 0 2px 0 ${Colors.PRIMARY_30};
      & path{
        width:24px
        height:24px;
      }
  }
`

const Container = styled.div`
  display: grid;
  padding: 16px;
  gap: 22px;
`
const Title = styled.p`
  color: ${Colors.SECONDARY_20};
  font-size: 20px;
  font-weight: 700;
  margin: 0;
`
