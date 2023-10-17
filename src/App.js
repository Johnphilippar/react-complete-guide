import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 1294.92,
    date: new Date(2021, 4, 21),
  },
  {
    id: "e2",
    title: "House Insurance",
    amount: 28329.76,
    date: new Date(2023, 1, 5),
  },
  {
    id: "e3",
    title: "Health Insurance",
    amount: 8534.51,
    date: new Date(2019, 11, 15),
  },
  {
    id: "e4",
    title: "Retirement Insurance",
    amount: 82124.09,
    date: new Date(2011, 8, 9),
  },
  {
    id: "e5",
    title: "Loan Insurance",
    amount: 2184.17,
    date: new Date(2021, 12, 22),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense,...expenses]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} /> 
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
