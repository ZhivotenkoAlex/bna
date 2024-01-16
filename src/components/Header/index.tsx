import React from 'react'
import styled from 'styled-components'
import MenuFillIcon from 'remixicon-react/MenuFillIcon'
import LogoIcon from '../../icons/Logo'
import { Colors } from '../../helpers/colors'
import UserBlock from './UserBlock'
import { UserData } from '../../mock/userData'

export default function Header() {
  return (
    <Root>
      <MenuFillIcon size={30} color={Colors.PRIMARY_50} />
      <LogoIcon />
      <UserBlock userName={UserData.name} />
    </Root>
  )
}

const Root = styled.header`
  background: ${Colors.SECONDARY_30};
  padding: 19px 27px;
  display: flex;
  justify-content: space-between;
`
