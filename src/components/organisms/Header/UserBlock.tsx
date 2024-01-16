import { useMemo } from 'react'
import styled from 'styled-components'
import { Colors } from '../../../helpers/colors'
import BellIcon from '../../../icons/BellIcon'
import { Sizes } from '../../../helpers/sizes'
import { useMediaQuery } from '../../../hooks/useMediaQuery'
import IconCircleContainer from '../../atoms/IconCircleContainer'
import ArrowDownIcon from 'remixicon-react/ArrowDownSLineIcon'
type PropTypes = {
  userName: string
}

export default function UserBlock({ userName }: PropTypes) {
  const isWideScreen = useMediaQuery('min', Sizes.LAPTOP)
  const isExtraIconShown = useMediaQuery('min', Sizes.TABLET)
  console.log('🚀 ~ UserBlock ~ isExtraIconShown:', isExtraIconShown)

  const name = useMemo(
    () =>
      isWideScreen
        ? userName
        : userName
            .split(' ')
            .map(el => el[0])
            .join(''),
    [isWideScreen, userName],
  )

  return (
    <Root>
      <UserName>{name}</UserName>
      <IconCircleContainer>
        <BellIcon />
      </IconCircleContainer>
      {isExtraIconShown && (
        <>
          <IconCircleContainer>PM</IconCircleContainer>
          <ArrowDownIcon color={Colors.PRIMARY_50} />
        </>
      )}
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media (min-width: ${Sizes.TABLET}px) {
    gap: 16px;
  }
`

const UserName = styled.span`
  color: ${Colors.PRIMARY_50};
  font-size: 14px;
`
