import React, { useContext } from 'react'
import { ExpenseListContext } from '../contexts/ExpenseListContext'

const TotalExpense = () => {
  const { expenses } = useContext(ExpenseListContext)
  return (
    <div>
      <h1>Total Expense: <span className="total">
        ${expenses.reduce((acc, curr) => (acc += curr.amount), 0)}
      </span> </h1>
    </div>
  )
}

export default TotalExpense
