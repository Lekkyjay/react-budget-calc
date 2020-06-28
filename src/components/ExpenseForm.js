import React, { useState, useContext, useEffect } from 'react'
import { ExpenseListContext } from '../contexts/ExpenseListContext'
import { MdSend } from "react-icons/md"
import Alert from '../components/Alert'

const ExpenseForm = () => {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const { addExpense, editItem, editExpenses } = useContext(ExpenseListContext)

  const [alert, setAlert] = useState({ show: false });

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!editItem) {
      addExpense({title, amount})
      setTitle('')
      setAmount('')
    } else {
      editExpenses({id: editItem.id, title, amount})
    }
    
    handleAlert({ type: "success", text: "New expense added!" });
  }

  //populate form fields with items to be modified
  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title)
      setAmount(editItem.amount)
    } else {
      setTitle('')
    }
  }, [editItem])
  
  return (
    <div>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <form onSubmit={handleSubmit}>
        <div className="form-center">
          <div className="form-group">
            <label htmlFor="item">Item</label>
            <input 
              type="text" 
              className="form-control" 
              id="item" 
              name="item" 
              placeholder="Enter item" 
              value={title} 
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input 
              type="number"
              className="form-control"
              id="amount"
              name="amount"
              placeholder="e.g. 100"
              value={amount}
              onChange={e => setAmount(parseInt(e.target.value))}
            />
          </div>
        </div>
        <button type="submit" className="btn">
          
          <MdSend className="btn-icon" />
        </button>
      </form>
    </div>
  )
}

export default ExpenseForm
