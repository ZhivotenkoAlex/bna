import React from 'react'
import Title from '../../atoms/Title'
import { Colors } from '../../../helpers/colors'
import AddLineIcon from 'remixicon-react/AddLineIcon'
import IconCircleContainer from '../../atoms/IconCircleContainer'
import styled from 'styled-components'
import AccountItem from '../../molecules/AccountItem'
type PropTypes = {
  accounts: []
}
export default function AccountAndCardsSection({ accounts }: PropTypes) {
  return (
    <>
      <Title>Bank Account and Cards</Title>
      <AccountContainer>
        {accounts.map((item: any) => (
          <AccountItem key={item.id} account={item} />
        ))}
      </AccountContainer>
      <CardLink>
        <IconCircleContainer color="dark">
          <AddLineIcon color={Colors.PRIMARY_50} />
        </IconCircleContainer>
        <CardLinkTitle>Link a card or bank</CardLinkTitle>
      </CardLink>
    </>
  )
}

const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
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
