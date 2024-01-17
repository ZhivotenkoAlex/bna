import React from "react"
import styled from "styled-components"
import cardBG from "../../../Images/cardBG.png"
import Chip, { ChipType } from "../../atoms/Chip"
import Currency from "../../atoms/Currency"
import { Colors } from "../../../helpers/colors"
import { getCardNumber } from "../../../helpers/cardNumber"
import { toCapitalize } from "../../../helpers/toCapitalize"
import { BankCardType } from "../../../types/userData"

type PropTypes = {
  card: BankCardType
  handleCardClick: (card: BankCardType) => void
}

export default function BankCard({ card, handleCardClick }: PropTypes) {
  const { status, balance, currency, number } = card
  const onCardClick = () => handleCardClick(card)
  return (
    <Root onClick={onCardClick}>
      <Container>
        <Chip variant={status as ChipType}>{toCapitalize(status)}</Chip>
        <BalanceContainer>
          <Currency
            currency={currency}
            amount={balance}
            color="white"
            type="card"
          ></Currency>
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
  transition: all 0.5s ease-in-out;
  &:hover {
    scale: 0.98;
    box-shadow: 0 0 5px 0 ${Colors.PRIMARY_30},
      inset 0 0 5px 0 ${Colors.PRIMARY_30};
  }
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
