import React  , { useState } from "react";
import "./ExpenseItem.scss";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";


const ExpenseItem = (props) => {

  const [title , setTitle] = useState(props.title);
  console.log('ExpenseItem Called')

  // let title = props.title;

  const clickHandler = () => {
    setTitle('New Title');
    console.log(title)
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>
        Change Title
      </button> */}
    </Card>
  );
}

export default ExpenseItem;
