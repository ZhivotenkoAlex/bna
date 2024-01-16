import React, { ReactNode, useMemo, useState } from 'react'
import Title from '../../atoms/Title'
import FilterButton from '../../molecules/FilterButton'
import Button from '../../atoms/Button'
import TransactionItem from '../../molecules/TransactionItem'
import { transactionsFilters } from '../../../mock/userData'
import styled from 'styled-components'

export default function TransactionsSection({ activeCard }: any) {
  const [activeFilter, setActiveFilter] = useState<any>('All')
  const [displayedTransactionsCount, setDisplayedTransactionsCount] = useState(3)

  const activeFilterHandle = (name: ReactNode) => setActiveFilter(name)

  const filteredTransactions = useMemo(
    () =>
      activeCard.transactions.filter((item: any) => {
        return activeFilter === 'All' ? item : item.type === 'payment'
      }),
    [activeCard.transactions, activeFilter],
  )

  const displayedTransactions = useMemo(
    () => filteredTransactions.slice(0, displayedTransactionsCount),
    [displayedTransactionsCount, filteredTransactions],
  )

  const handleShowMore = () => {
    const step = 3
    if (displayedTransactionsCount < filteredTransactions.length) {
      setDisplayedTransactionsCount(prev => prev + step)
    } else {
      setDisplayedTransactionsCount(step)
    }
  }

  const showMoreButtonTitle =
    displayedTransactions.length < filteredTransactions.length ? 'Show more' : 'Show less'

  return (
    <Root>
      <Title>Transactions</Title>
      <FilterContainer>
        {transactionsFilters.map((filter: any) => (
          <FilterButton
            key={filter.id}
            variant={activeFilter === filter.title ? 'active' : 'inactive'}
            children={filter.title}
            onClick={activeFilterHandle}
          />
        ))}
      </FilterContainer>
      <TransactionsContainer>
        {displayedTransactions.map((item: any, index: number) => (
          <TransactionItem key={item.id} transaction={item} />
        ))}
      </TransactionsContainer>
      <ButtonContainer>
        <Button variant="secondary" onClick={handleShowMore}>
          {showMoreButtonTitle}
        </Button>
      </ButtonContainer>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`

const FilterContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  order: 0;
`

const TransactionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: auto;
  max-height: 1000px;
  transition: all 1s ease;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  order: -1;
`
