import styled, { keyframes } from 'styled-components'
import dayjs from 'dayjs'
import { Colors } from '../../../helpers/colors'
import IconCircleContainer from '../../atoms/IconCircleContainer'
import CardIcon from '../../../icons/CardIcon'
import WalletIcon from '../../../icons/WalletIcon'
import Currency from '../../atoms/Currency'
import { toCapitalize } from '../../../helpers/toCapitalize'
import { Transaction } from '../../../types/userData'

type PropTypes = {
  transaction: Transaction
  className?: string
}

export default function TransactionItem({ transaction, className }: PropTypes) {
  const { partner, date, type, amount } = transaction
  const isPaymentType = type === 'payment'

  const currencyColor = type === 'payment' ? 'regular' : 'success'
  const capitalizedType = toCapitalize(type)

  const formattedDate = dayjs(date).format('MMM DD')
  return (
    <Root className={className}>
      <Container>
        <IconCircleContainer color={isPaymentType ? 'light' : 'normal'}>
          {isPaymentType ? <CardIcon /> : <WalletIcon />}
        </IconCircleContainer>
        <DescriptionContainer>
          <Partner>{partner}</Partner>
          <Description>
            {formattedDate}, {capitalizedType}
          </Description>
        </DescriptionContainer>
      </Container>
      <Currency color={currencyColor} amount={amount} />
    </Root>
  )
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
const Root = styled.div`
  animation: 1s ${fadeIn} ease-out;
  display: flex;
  width: 100%;
  padding: 16px 8px;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  border: 1px solid ${Colors.SECONDARY_80};
  border-radius: 8px;
`

const DescriptionContainer = styled.div``

const Partner = styled.p`
  color: ${Colors.REGULAR_BLACK};
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
`
const Description = styled.p`
  color: ${Colors.REGULAR_BLACK};
  font-size: 12px;
  font-weight: 400;
`

const Container = styled.div`
  display: flex;
  gap: 8px;
`
