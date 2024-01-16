import styled from 'styled-components'
import { Colors } from '../../../helpers/colors'

export default function AccountItem({ account }: any) {
  return (
    <Root>
      <Title> Signature RBC visa ( ****3234)</Title>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  max-width: 332px;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid ${Colors.SECONDARY_80};
  background: ${Colors.PRIMARY_100};
`

const Title = styled.p`
  color: ${Colors.SECONDARY_20};
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
`
