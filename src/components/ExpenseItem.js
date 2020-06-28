import React, { useContext } from 'react'
import { MdEdit, MdDelete } from "react-icons/md";
import { ExpenseListContext } from '../contexts/ExpenseListContext'

const ExpenseItem = ({expense}) => {
  const { findItem, handleDelete } = useContext(ExpenseListContext)
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{expense.title}</span>
        <span className="amount">${expense.amount}</span>
      </div>
      <div>
        <button
          className="edit-btn"
          aria-label="edit button"
          onClick={() => findItem(expense.id)}
        >
          <MdEdit />
        </button>
        <button
          className="clear-btn"
          aria-label="delete button"
          onClick={() => handleDelete(expense.id)}
        >
          <MdDelete />
        </button>
      </div>
    </li>
  )
}

export default ExpenseItem
