import React from 'react'
import styled from 'styled-components'
import cardBG from '../../Images/cardBG.png'
import Chip from '../Chip'
import Currency from '../Currency'
import { Colors } from '../../helpers/colors'
import { getCardNumber } from '../../helpers/cardNumber'
import { toCapitalize } from '../../helpers/toCapitalize'

type CardType = {
  status: 'active' | 'inactive'
  balance: number
  currency: 'USD'
  number: string
}

type PropTypes = {
  card: CardType
  handleCardClick: (card: CardType) => void
}

export default function BankCard({ card, handleCardClick }: PropTypes) {
  const { status, balance, currency, number } = card
  const onCardClick = () => handleCardClick(card)
  return (
    <Root onClick={onCardClick}>
      <Container>
        <Chip variant={status}>{toCapitalize(status)}</Chip>
        <BalanceContainer>
          <Currency currency={currency} amount={balance} color="white" type="card"></Currency>
          <Content>Available Balance</Content>
        </BalanceContainer>
        <Content>{getCardNumber(number, true)}</Content>
      </Container>
    </Root>
  )
}

const Root = styled.div`
  min-width: 256px;
  height: 160px;
  border-radius: 15px;
  background-image: url(${cardBG});
`

const Container = styled.div`
  display: grid;
  padding: 16px;
  gap: 16px;
`
const BalanceContainer = styled.div``

const Content = styled.p`
  color: ${Colors.REGULAR_WHITE};
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  margin: 0;
`
