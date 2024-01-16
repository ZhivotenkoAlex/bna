import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import { Colors } from '../../helpers/colors'
import IconCircleContainer from '../IconCircleContainer'
import CardIcon from '../../icons/CardIcon'
// import WalletIcon from '../../icons/WalletIcon'
import Currency from '../Currency'
import { toCapitalize } from '../../helpers/toCapitalize'

type PropTypes = {
  transaction: { partner: string; date: Date; type: string; amount: number }
  handleCardClick?: () => void
}

export default function TransactionItem({ transaction, handleCardClick }: PropTypes) {
  const { partner, date, type, amount } = transaction

  const currencyColor = type === 'payment' ? 'regular' : 'success'
  const capitalizedType = toCapitalize(type)

  const formattedDate = dayjs(date).format('MMM DD')
  return (
    <Root>
      <Container>
        <IconCircleContainer>
          <CardIcon />
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

const Root = styled.div`
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
