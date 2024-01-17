import { Colors } from '../../../helpers/colors'
import AddLineIcon from 'remixicon-react/AddLineIcon'
import IconCircleContainer from '../../atoms/IconCircleContainer'
import styled from 'styled-components'
import AccountItem from '../../molecules/AccountItem'
import { Sizes } from '../../../helpers/sizes'
import { BankAccount } from '../../../types/userData'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../helpers/routes'

type PropTypes = {
  accounts: BankAccount[]
}

export default function AccountAndCardsSection({ accounts }: PropTypes) {
  return (
    <>
      <Title>Bank Account and Cards</Title>
      <AccountContainer>
        {accounts.map((item: BankAccount) => (
          <AccountItem key={item.id} account={item} />
        ))}
      </AccountContainer>
      <CardLinkContainer>
        <IconCircleContainer color="dark">
          <AddLineIcon color={Colors.PRIMARY_50} />
        </IconCircleContainer>
        <CardLink to={ROUTES.LINK_BANK}>Link a card or bank</CardLink>
      </CardLinkContainer>
    </>
  )
}

const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  @media screen and (min-width: ${Sizes.TABLET}px) {
    gap: 16px;
  }
`

const CardLinkContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 22px;
  margin: 16px 0 72px 0;
  @media screen and (min-width: ${Sizes.TABLET}px) {
    margin-bottom: 16px;
  }
`

const CardLink = styled(Link)`
  color: ${Colors.SECONDARY_20};
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;
  transition: all 1s ease;
  &:hover {
    color: ${Colors.PRIMARY_30};
  }
`

const Title = styled.h4`
  margin: 32px 0 16px 0;
  font-weight: 700;
  font-size: 16px;
  @media screen and (min-width: ${Sizes.TABLET}px) {
    font-size: 24px;
  }
  @media screen and (min-width: ${Sizes.LAPTOP}px) {
    margin: 16px 0;
  }
`
