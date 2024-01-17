// import Title from '../../atoms/Title'
import { Colors } from '../../../helpers/colors'
import AddLineIcon from 'remixicon-react/AddLineIcon'
import IconCircleContainer from '../../atoms/IconCircleContainer'
import styled from 'styled-components'
import AccountItem from '../../molecules/AccountItem'
import { Sizes } from '../../../helpers/sizes'
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
  gap: 8px;
  @media screen and (min-width: ${Sizes.TABLET}px) {
    gap: 16px;
  }
`

const CardLink = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 22px;
  margin: 16px 0 72px 0;
  @media screen and (min-width: ${Sizes.TABLET}px) {
    margin-bottom: 16px;
  }
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
