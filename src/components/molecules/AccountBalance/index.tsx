import styled from 'styled-components'
import canada from '../../../Images/canada.png'
import { Colors } from '../../../helpers/colors'
import Currency from '../../atoms/Currency'

type PropTypes = {
  balance: number
}

export default function AccountBalance({ balance }: PropTypes) {
  return (
    <Root>
      <img src={canada} alt="Logo" />
      <Currency currency="USD" amount={balance} />
    </Root>
  )
}

const Root = styled.div`
  display: grid;
  width: 200px;
  height: 130px;
  background: ${Colors.PRIMARY_90};
  border: 1px solid ${Colors.PRIMARY_50};
  border-radius: 10px;
  padding: 20px 17px;
  gap: 15px;
`
