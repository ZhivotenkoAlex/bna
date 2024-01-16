import React, { useMemo } from 'react'
import styled from 'styled-components'
import { Colors } from '../../helpers/colors'
import BellIcon from '../../icons/BellIcon'
import { Sizes } from '../../helpers/sizes'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import IconCircleContainer from '../IconCircleContainer'
type PropTypes = {
  userName: string
}

export default function UserBlock({ userName }: PropTypes) {
  const isWideScreen = useMediaQuery('min', Sizes.LAPTOP)

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
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const UserName = styled.span`
  color: ${Colors.PRIMARY_50};
`
