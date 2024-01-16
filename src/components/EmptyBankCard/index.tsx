import styled from 'styled-components'
import { Colors } from '../../helpers/colors'
import IconCircleContainer from '../IconCircleContainer'
import AddLineIcon from 'remixicon-react/AddLineIcon'

export default function EmptyBankCard() {
  return (
    <Root>
      <Container>
        <IconCircleContainer color="dark">
          <AddLineIcon color={Colors.PRIMARY_50} />
        </IconCircleContainer>
        <Title>Order a new card</Title>
      </Container>
    </Root>
  )
}

const Root = styled.div`
  min-width: 256px;
  height: 160px;
  border-radius: 15px;
  background: ${Colors.PRIMARY_100};
  border: 1px solid ${Colors.SECONDARY_80};
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
