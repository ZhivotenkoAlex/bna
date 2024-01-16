import Title from '../Title'
import AccountBalance from '../AccountBalance'
import BankCard from '../BankCard'
import EmptyBankCard from '../EmptyBankCard'
import styled from 'styled-components'
import Button from '../Button'
import TransactionItem from '../TransactionItem'
import AccountItem from '../AccountItem'
import IconCircleContainer from '../IconCircleContainer'
import AddLineIcon from 'remixicon-react/AddLineIcon'
import { Colors } from '../../helpers/colors'
import { ReactNode, useState } from 'react'
import { transactionsFilters } from '../../mock/userData'

export default function MainPage({ userData }: any) {
  const { cards, balance } = userData
  const [activeCard, setActiveCard] = useState(cards[0])
  const [activeFilter, setActiveFilter] = useState<any>('All')

  const activeCardHandle = (item: any) => setActiveCard(item)
  const activeFilterHandle = (name: ReactNode) => setActiveFilter(name)

  return (
    <>
      <Title>XEPPT Account Balance</Title>
      <AccountBalance balance={balance} />
      <Title>XEPPT Prepaid Card</Title>
      <CardContainer>
        {cards.map((card: any) => (
          <BankCard card={card} handleCardClick={activeCardHandle} />
        ))}
        <EmptyBankCard />
      </CardContainer>
      <Title>Transactions</Title>
      <FilterContainer>
        {transactionsFilters.map((filter: any) => (
          <Button
            variant={activeFilter === filter.title ? 'active' : 'inactive'}
            children={filter.title}
            onClick={activeFilterHandle}
          />
        ))}
      </FilterContainer>
      <TransactionsContainer>
        {activeCard.transactions.map((item: any) => (
          <TransactionItem key={item.id} transaction={item} />
        ))}
      </TransactionsContainer>
      <ButtonContainer>
        <Button variant="secondary">Show more</Button>
      </ButtonContainer>
      <Title>Bank Account and Cards</Title>
      <AccountContainer>
        {userData.bankAccounts.map((item: any) => (
          <AccountItem account={item} />
        ))}
      </AccountContainer>
      <CardLink>
        <IconCircleContainer color="dark">
          <AddLineIcon color={Colors.PRIMARY_50} />
        </IconCircleContainer>
        <CardLinkTitle>Link a card or bank</CardLinkTitle>
      </CardLink>
      <AddMoneyContainer>
        <Button variant="secondary" fullWidth>
          Add money
        </Button>
      </AddMoneyContainer>
    </>
  )
}

const CardContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: nowrap;
  justify-content: flex-start;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`

const FilterContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 17px;
`

const TransactionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`

const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

const CardLink = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 22px;
  margin: 16px 0 72px 0;
`

const CardLinkTitle = styled.p`
  color: ${Colors.SECONDARY_20};
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;
`

const AddMoneyContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 19px;
`
