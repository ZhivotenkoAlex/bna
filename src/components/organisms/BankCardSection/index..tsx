import React from 'react'
import Title from '../../atoms/Title'
import BankCard from '../../molecules/BankCard'
import EmptyBankCard from '../../molecules/EmptyBankCard'
import styled from 'styled-components'

type PropTypes = {
  cards: any
  activeCardHandle: (item: any) => void
}

export default function BankCardSection({ cards, activeCardHandle }: PropTypes) {
  return (
    <>
      <Title>XEPPT Prepaid Card</Title>
      <CardContainer>
        {cards.map((card: any) => (
          <BankCard key={card.id} card={card} handleCardClick={activeCardHandle} />
        ))}
        <EmptyBankCard />
      </CardContainer>
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
