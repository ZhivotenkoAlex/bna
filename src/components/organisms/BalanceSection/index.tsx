import Title from '../../atoms/Title'
import AccountBalance from '../../molecules/AccountBalance'

type PropTypes = {
  balance: number
}

export default function BalanceSection({ balance }: PropTypes) {
  return (
    <>
      <Title>XEPPT Account Balance</Title>
      <AccountBalance balance={balance} />
    </>
  )
}
