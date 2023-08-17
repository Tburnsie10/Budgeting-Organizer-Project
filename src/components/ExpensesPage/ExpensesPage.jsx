
import React, {useEffect} from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "reactstrap";
import './ExpensesPage.css'


function ExpensesPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const expenses = useSelector((store) => store.expenses);
  const dispatch = useDispatch()
  console.log(expenses)

useEffect(() => {
  dispatch({type:'GET_EXPENSES'})
},[])
console.log(expenses)

  function addRow(event) {
    event.preventDefault();
    console.log(event)
    let inputs = event.target.parentElement.querySelectorAll('input')
    console.log(inputs)
    let name = inputs[0].value
    let amount = inputs[1].value
    let date = inputs[2].value

    let obj = {type:'ADD_EXPENSE', payload:[name, amount, date]}
    dispatch(obj)
    console.log(expenses)
  }

  function expenseTotal() {
    let total = 0
    expenses.map((expense) => {
      total += Number(expense.amount)
    }) 
    return total;
  }

  return (
    <div className="container">
      <h2>Expenses</h2>
      <Table>
        <thead >
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
          
        </thead>
        <tbody>
            {expenses.map(expense => {
                return (<tr>
                    <td>{expense.expense_name}</td>
                    <td>{expense.amount}</td>
                    <td>{expense.expense_date.split('T')[0]}</td>
                  </tr>)
            })}
        </tbody>
      </Table>
      <div className="top">Total Expenses:{expenseTotal()}</div>
      <div id="input">
          <input placeholder="name"></input>
          <input placeholder="amount"></input>
          <input placeholder="date"></input>
          <button onClick={addRow}>Add Row</button>
        </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default ExpensesPage;
