import React from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseListContextProvider from './contexts/ExpenseListContext'
import TotalExpense from './components/TotalExpense';


function App() {
  return (
    <div>
      <h1>Budget Calculator</h1>
      <ExpenseListContextProvider>
        <main className="App">
          <ExpenseForm />
          <ExpenseList />
        </main>
        <TotalExpense />
      </ExpenseListContextProvider>
    </div>
  );
}

export default App;
