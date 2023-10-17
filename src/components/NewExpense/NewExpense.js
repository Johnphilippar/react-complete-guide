import React , { useState } from 'react'
import './NewExpense.scss';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    //Console.log(expenseData) this is for the mean time while making the props.onAddExpense(expenseData) in the App.JS
    props.onAddExpense(expenseData)
  }

  const [isEditing , setIsEditing] = useState(false)

  const addClickHandler = () => {
    setIsEditing(true)
  }
  const cancelClickHandler = () => {
    setIsEditing(false)
  }

  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={addClickHandler}>Add Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelClickHandler}/>}
    </div>
  )
}

export default NewExpense