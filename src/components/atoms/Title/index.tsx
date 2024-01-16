import styled from 'styled-components'
import { Sizes } from '../../../helpers/sizes'

type PropTypes = {
  children: string
}

export default function Title({ children }: PropTypes) {
  return <Heading>{children}</Heading>
}

const Heading = styled.h4`
  margin: 32px 0 16px 0;
  font-weight: 700;
  font-size: 16px;
  @media screen and (min-width: ${Sizes.TABLET}px) {
    font-size: 24px;
  }
`
