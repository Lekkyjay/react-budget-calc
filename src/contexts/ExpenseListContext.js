import React, { createContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const ExpenseListContext = createContext()

const ExpenseListContextProvider = ({ children }) => {
  const initialState = JSON.parse(localStorage.getItem('expenses')) || []
  const [expenses, setExpenses] = useState(initialState)

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses])

  const [editItem, setEditItem] = useState(null)

  const addExpense = newExpense => {
    // console.log('newExpense: ', {id: uuidv4(), ...newExpense})
    setExpenses([...expenses, {id: uuidv4(), ...newExpense}])
  }

    //find item to be modified -editItem- and populate form fields with it
  const findItem = (id) => {
    const editedItem = expenses.find(expense => expense.id === id)
    setEditItem(editedItem)
  }

  //Insert the edited expense into global state
  const editExpenses = (expense) => {
    setExpenses(expenses.map((item) => (item.id === expense.id) ? {...expense} : item ))
  }

  const handleDelete = (id) => {
    setExpenses(expenses.filter((expense) => expense.id != id))
  }

  const removeAll = () => {
    setExpenses([])
  }

  return (
    <ExpenseListContext.Provider value={{
      expenses, 
      addExpense, 
      findItem, 
      handleDelete, 
      editItem, 
      editExpenses,
      removeAll}}
    >
      { children }
    </ExpenseListContext.Provider>
  )
}

export default ExpenseListContextProvider
