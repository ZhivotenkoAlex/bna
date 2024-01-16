import styled from 'styled-components'

type PropTypes = {
  children: string
}

export default function Title({ children }: PropTypes) {
  return <Heading>{children}</Heading>
}

const Heading = styled.h4`
  margin: 32px 0 16px 0;
`
