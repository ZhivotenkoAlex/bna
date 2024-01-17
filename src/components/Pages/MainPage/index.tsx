import styled from "styled-components"
import Button from "../../atoms/Button"
import { useState } from "react"
import "animate.css/animate.min.css"
import BalanceSection from "../../organisms/BalanceSection"
import BankCardSection from "../../organisms/BankCardSection/index."
import TransactionsSection from "../../organisms/TransactionsSection"
import AccountAndCardsSection from "../../organisms/AccountAndCardsSection.tsx"
import { Sizes } from "../../../helpers/sizes"
import { useMediaQuery } from "../../../hooks/useMediaQuery"
import GlobIcon from "../../../icons/GlobIcon"
import { BankCardType, UserType } from "../../../types/userData"

type PropTypes = {
  userData: UserType
}

export default function MainPage({ userData }: PropTypes) {
  const { cards, balance, bankAccounts } = userData

  const [activeCard, setActiveCard] = useState(cards[0])
  const activeCardHandle = (item: BankCardType) => setActiveCard(item)
  const isWideScreen = useMediaQuery("min", Sizes.LAPTOP)

  return (
    <Root>
      <LeftContainer>
        <BalanceSection balance={balance} />
        <BankCardSection cards={cards} activeCardHandle={activeCardHandle} />
        <TransactionsSection activeCard={activeCard} />
      </LeftContainer>
      <RightContainer>
        <AccountAndCardsSection accounts={bankAccounts} />
        <AddMoneyContainer>
          <Button variant="secondary" fullWidth={true}>
            Add money
          </Button>
        </AddMoneyContainer>
      </RightContainer>
      {isWideScreen && <StyledGlobIcon />}
    </Root>
  )
}

const Root = styled.div`
  max-width: 1398px;
  margin: 0 auto;
  padding-bottom: 32px;
  @media (min-width: ${Sizes.LAPTOP}px) {
    display: flex;
    gap: 16px;
    justify-content: space-between;
  }
`

const AddMoneyContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 19px;
  @media screen and (min-width: ${Sizes.LAPTOP}px) {
    order: -1;
    margin-top: 32px;
  }
`

const LeftContainer = styled.div`
  @media screen and (min-width: ${Sizes.LAPTOP}px) {
    max-width: 65%;
  }
`
const RightContainer = styled.div`
  display: grid;
  align-content: start;
  position: relative;
`

const StyledGlobIcon = styled(GlobIcon)`
  position: absolute;
  bottom: 0px;
  right: 0px;
  @media screen and (max-width: ${Sizes.TABLET}px) {
    width: 300px;
    height: 300px;
  }
  @media screen and (max-width: ${Sizes.LAPTOP}px) {
    width: 536px;
    height: 536px;
  }
`
