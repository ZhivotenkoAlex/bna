import styled from 'styled-components'
import { CurrencyColors } from '../../helpers/colors'

type CurrencyColor = 'white' | 'regular' | 'success'
type CurrencyComponentType = 'card' | 'transaction'
type PropType = {
  amount: number
  type?: CurrencyComponentType
  currency?: 'USD'
  color?: CurrencyColor
}

export default function Currency({
  type = 'transaction',
  currency = 'USD',
  amount,
  color = 'regular',
}: PropType) {
  const params = {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    currencyDisplay: 'symbol',
  }
  const value = new Intl.NumberFormat('en', params).format(amount)
  return (
    <Title color={color} type={type}>
      {value}
    </Title>
  )
}

const Title = styled.p<{ color: CurrencyColor; type: CurrencyComponentType }>`
  color: ${props => CurrencyColors[props.color]};
  font-size: ${props => (props.type === 'card' ? '18px' : '16px')};
  font-weight: 700;
  line-height: 150%; /* 27px */
  margin: 0;
`
