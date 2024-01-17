export type UserType = {
  id: string
  name: string
  balance: number
  cards: BankCardType[]
  bankAccounts: BankAccount[]
}

export type BankCardType = {
  id: string
  status: string
  balance: number
  currency: string
  number: string
  transactions: Transaction[]
}

export type Transaction = {
  id: string
  partner: string
  date: string
  type: string
  amount: number
  currency: string
}
export type BankAccount = {
  id: string
  title: string
  number: string
}

export type FilterType = 'All' | 'XEPPT Card'

export type NavMenuItem = {
  id: string
  label: string
  path: string
}

export enum CardStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}
