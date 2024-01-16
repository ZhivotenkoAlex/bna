import { useState } from 'react'
import 'animate.css/animate.min.css'
import styled from 'styled-components'
import CloseFillIcon from 'remixicon-react/CloseFillIcon'
import MenuFillIcon from 'remixicon-react/MenuFillIcon'
import { Colors } from '../../../helpers/colors'
import LogoIcon from '../../../icons/Logo'

export const SideBar = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOnClose = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Root>
      <MenuFillIcon size="30px" color={Colors.PRIMARY_50} onClick={handleOnClose} />
      <SideMenuWrapper $isOpen={isOpen} onClick={handleOnClose}>
        <SideMenu
          $isOpen={isOpen}
          onClick={e => e.stopPropagation()}
          className={`animate__animated ${isOpen ? 'animate__fadeIn' : 'animate__fadeOut'} `}
        >
          <CloseIconCover>
            <CloseIcon size="35px" color={Colors.PRIMARY_50} onClick={handleOnClose} />
          </CloseIconCover>
          <ItemContainer onClick={handleOnClose}>
            <>
              <LogoWrapper>
                <LogoIcon />
              </LogoWrapper>
              {children}
            </>
          </ItemContainer>
        </SideMenu>
      </SideMenuWrapper>
    </Root>
  )
}

const Root = styled.div`
  display: grid;
  align-content: center;
  &div: first-child {
    cursor: pointer;
  }
`

const SideMenuWrapper = styled.div<{ $isOpen: boolean }>`
  display: ${props => (props.$isOpen ? 'block' : 'none')};
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${Colors.NEUTRAL_20};
`

const SideMenu = styled.div<{ $isOpen: boolean }>`
  display: ${props => (props.$isOpen === true ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  position: fixed;
  z-index: 5;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: ${Colors.SECONDARY_30};
  div:not(:last-child) {
    margin-bottom: 10px;
  }
`

const CloseIconCover = styled.div`
  display: flex;
  width: 100%;
  justify-content: right;
  margin: 5px 5px 0 0;
`

const CloseIcon = styled(CloseFillIcon)`
  cursor: pointer;
`

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const LogoWrapper = styled.div`
  &&& {
    margin-bottom: 30px;
  }
`
