import { ReactNode } from "react"
import styled from "styled-components"
import { Colors } from "../../../helpers/colors"
import { CardStatus } from "../../../types/userData"

export type ChipType = "active" | "inactive"

type PropType = {
  variant?: ChipType
  children: ReactNode
}

export default function Chip({
  variant = CardStatus.INACTIVE,
  children,
}: PropType) {
  return (
    <Root $variant={variant}>
      <Title>{children}</Title>
    </Root>
  )
}

const Root = styled.div<{ $variant: string }>`
  display: flex;
  width: min-content;
  padding: 4px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  color: ${(prop) =>
    prop.$variant === "active" ? Colors.SECONDARY_100 : Colors.PRIMARY_20};
  background: ${(prop) =>
    prop.$variant === "active" ? Colors.PRIMARY_20 : Colors.PRIMARY_80};
`

const Title = styled.p`
  margin: 0;
  font-size: 10px;
  font-weight: 500;
  line-height: 150%;
`
