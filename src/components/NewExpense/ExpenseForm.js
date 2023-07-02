import React , { useState } from "react";
import "./ExpenseForm.scss";

const ExpenseForm = (props) => {

  const [enteredTitle , setEnteredTitle] = useState('');
  const [enteredDate , setEnteredDate] = useState('');
  const [enteredAmount , setEnteredAmount] = useState('');



// ALTERNATIVE WAY TO USE USESTATE
  // const [userInput , setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
  // ALTERNATIVE WAY TO USE OR CALL USESTATE
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // })

  // ALTERNATIVE WAY TO USE OR CALL USESTATE
    // setUserInput((prevState) => {
    //   return {...prevState , enteredTitle: event.target.value}
    // })
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
  // ALTERNATIVE WAY TO USE OR CALL USESTATE
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  }
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
  
  // ALTERNATIVE WAY TO USE OR CALL USESTATE
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value
    // })
  }

//ALTERNATIVE SHARED HANDLER FUNCTION
  // const inputChangeHandler = (identifier , value) => {
  //   if(identifier === 'title') {
  //     setEnteredTitle(value);
  //   } else if (identifier === 'amount') {
  //     setEnteredAmount(value)
  //   } else {
  //     setEnteredDate(value)
  //   }
  // }

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }
  

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="">Title</label>
            <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
            {/* //ALTERNATIVE SHARED HANDLER FUNCTION */}
            {/* <input type="text" onChange={(event) => inputChangeHandler('title' , event.target.value)}/> */}

          </div>
          <div className="new-expense__control">
            <label htmlFor="">Amount</label>
            <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
            {/* //ALTERNATIVE SHARED HANDLER FUNCTION */}
            {/* <input type="number" min="0.01" step="0.01" onChange={(event) => inputChangeHandler('amount', event.target.value)}/> */}
          </div>
          <div className="new-expense__control">
            <label htmlFor="">Date</label>
            <input type="date" value={enteredDate} min="2020-01-01" max="2025-12-31"  onChange={dateChangeHandler}/>
            {/* //ALTERNATIVE SHARED HANDLER FUNCTION */}
            {/* <input type="date" min="2020-01-01" max="2025-12-31" onChange={(event) => inputChangeHandler('date',event.target.value)}/> */}
          </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit" >Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
