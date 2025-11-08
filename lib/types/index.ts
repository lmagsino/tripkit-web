// User & Authentication
export interface User {
  id: string
  email: string
  name: string
  createdAt: string
  updatedAt: string
}

export interface AuthResponse {
  user: User
  token: string
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterCredentials {
  email: string
  password: string
  name: string
}

// Trips
export interface Trip {
  id: string
  name: string
  description?: string
  startDate: string
  endDate: string
  createdAt: string
  updatedAt: string
  expenses?: Expense[]
}

// Expenses
export type ExpenseCategory = 'Taxi' | 'Food' | 'Hotel' | 'Activities' | 'Other' | string

export type SplitType = 'equal' | 'custom'

export interface Expense {
  id: string
  tripId: string
  description: string
  amount: number
  currency: string
  category: ExpenseCategory
  splitType: SplitType
  paidBy: string // user id
  createdAt: string
  updatedAt: string
  splits?: ExpenseSplit[]
}

export interface ExpenseSplit {
  id: string
  expenseId: string
  userId: string
  amount: number
}

// API Error handling
export interface ApiError {
  message: string
  status: number
  errors?: Record<string, string[]>
}
