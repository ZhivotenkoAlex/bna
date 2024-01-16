import Title from '../../atoms/Title'
import styled from 'styled-components'
import Button from '../../atoms/Button'
import AccountItem from '../../molecules/AccountItem'
import IconCircleContainer from '../../atoms/IconCircleContainer'
import AddLineIcon from 'remixicon-react/AddLineIcon'
import { Colors } from '../../../helpers/colors'
import { useState } from 'react'
import 'animate.css/animate.min.css'
import BalanceSection from '../../organisms/BalanceSection'
import BankCardSection from '../../organisms/BankCardSection/index.'
import TransactionsSection from '../../organisms/TransactionsSection'
import AccountAndCardsSection from '../../organisms/AccountAndCardsSection.tsx'

export default function MainPage({ userData }: any) {
  const { cards, balance, bankAccounts } = userData

  const [activeCard, setActiveCard] = useState(cards[0])
  const activeCardHandle = (item: any) => setActiveCard(item)

  return (
    <>
      <BalanceSection balance={balance} />
      <BankCardSection cards={cards} activeCardHandle={activeCardHandle} />
      <TransactionsSection activeCard={activeCard} />
      <AccountAndCardsSection accounts={bankAccounts} />
      <AddMoneyContainer>
        <Button variant="secondary" fullWidth={true}>
          Add money
        </Button>
      </AddMoneyContainer>
    </>
  )
}

const AddMoneyContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 19px;
`
