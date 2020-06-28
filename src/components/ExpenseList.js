import React, { useContext } from 'react'
import ExpenseItem from './ExpenseItem'
import { MdDelete } from "react-icons/md";
import { ExpenseListContext } from '../contexts/ExpenseListContext'

const ExpenseList = () => {
  const { expenses, removeAll } = useContext(ExpenseListContext)
  // console.log('expenses:', expenses)
  return (
    <div>
      {expenses.length ?  (
        <ul className="list">
        {expenses.map( expense => 
          <ExpenseItem expense={expense} key={expense.id} />
        )}
      </ul>
      ) : (
        <p>Enter your expenses!</p>
      )}
      
      <button className="btn" onClick={removeAll}> clear expenses 
        <MdDelete className="btn-icon" /> 
      </button>
    </div>
  )
}

export default ExpenseList
