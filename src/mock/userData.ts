import { v4 as uuidv4 } from 'uuid'
export const UserData = {
  id: uuidv4(),
  name: 'Steve Rogers',
  balance: 191.0,
  cards: [
    {
      id: uuidv4(),
      status: 'inactive',
      balance: 20.0,
      currency: 'USD',
      number: '2034399002125581',
      transactions: [
        {
          id: uuidv4(),
          partner: 'Cineplex Inc.',
          date: '2024-09-24 12:09:33',
          type: 'payment',
          amount: -42.5,
          currency: 'USD',
        },
        {
          id: uuidv4(),
          partner: 'RBC Royal Bank',
          date: '2023-08-24 12:09:33',
          type: 'transfer from bank',
          amount: 500,
          currency: 'USD',
        },
        {
          id: uuidv4(),
          partner: 'Cineplex Inc.',
          date: '2024-09-24 12:09:33',
          type: 'payment',
          amount: -42.5,
          currency: 'USD',
        },
        {
          id: uuidv4(),
          partner: 'RBC Royal Bank',
          date: '2023-08-24 12:09:33',
          type: 'transfer from bank',
          amount: 500,
          currency: 'USD',
        },
        {
          id: uuidv4(),
          partner: 'Cineplex Inc.',
          date: '2024-09-24 12:09:33',
          type: 'payment',
          amount: -42.5,
          currency: 'USD',
        },
      ],
    },
    {
      id: uuidv4(),
      status: 'active',
      balance: 120.0,
      currency: 'USD',
      number: '2044399002125522',
      transactions: [
        {
          id: uuidv4(),
          partner: 'Cineplex Inc.',
          date: '2024-09-24 12:09:33',
          type: 'payment',
          amount: -52.5,
          currency: 'USD',
        },
        {
          id: uuidv4(),
          partner: 'RBC Royal Bank',
          date: '2023-09-24 12:09:33',
          type: 'transfer from bank',
          amount: 400,
          currency: 'USD',
        },
        {
          id: uuidv4(),
          partner: 'Cineplex Inc.',
          date: '2024-08-24 12:09:33',
          type: 'payment',
          amount: -52.5,
          currency: 'USD',
        },
        {
          id: uuidv4(),
          partner: 'RBC Royal Bank',
          date: '2023-08-24 12:09:33',
          type: 'transfer from bank',
          amount: 400,
          currency: 'USD',
        },
        {
          id: uuidv4(),
          partner: 'Cineplex Inc.',
          date: '2024-07-24 12:09:33',
          type: 'payment',
          amount: -52.5,
          currency: 'USD',
        },
      ],
    },
  ],
  bankAccounts: [
    {
      title: 'Signature RBC visa',
      number: '****3234',
    },
    {
      title: 'TD Bank Debit',
      number: '****0024',
    },
  ],
}

export const transactionsFilters = [
  {
    id: uuidv4(),
    title: 'All',
  },
  {
    id: uuidv4(),
    title: 'XEPPT Card',
  },
]
