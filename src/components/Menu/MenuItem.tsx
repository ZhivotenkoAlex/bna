import styled from 'styled-components'
import { Colors } from '../../helpers/colors'

interface PropTypes {
  item: {
    label: string
    path: string
  }
}
function MenuItem({ item }: PropTypes) {
  // const pathname = usePathname()
  const pathname = 'Home'
  // const pageName = pathname.split('/').find(item => item !== '')
  const isItemActive = pathname?.toLowerCase() === item.label?.toLowerCase()
  return (
    <Wrapper>
      <Item href={item.path} $isActive={isItemActive}>
        <Label>{item.label}</Label>
      </Item>
    </Wrapper>
  )
}

export default MenuItem

const Item = styled.a<{ $isActive: boolean }>`
  display: flex;
  padding: 8px 28px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  background: ${props => (props.$isActive === true ? Colors.SECONDARY_20 : 'transparent')};
  color: ${Colors.PRIMARY_50};
  text-transform: uppercase;
  cursor: ${props => (props.$isActive === true ? 'default' : 'pointer')};
  &:hover {
    background: ${props => (props.$isActive === true ? Colors.SECONDARY_20 : Colors.PRIMARY_90)};
    color: ${props => (props.$isActive === true ? Colors.PRIMARY_50 : Colors.PRIMARY_20)};
  }
`

const Label = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 150%;
`

const Wrapper = styled.div``
