
import React, {useEffect} from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "reactstrap";
function ExpensesPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const expenses = useSelector((store) => store.expenses);
  const dispatch = useDispatch()
  console.log(expenses)

useEffect(() => {
  dispatch({type:'GET_EXPENSES'})
},[])

  function addRow(event) {
    event.preventDefault();
    let inputs = event.parentElement.querySelectorAll('input')
    let name = inputs[0].value
    let amount = inputs[1].value
    let date = inputs[2].value

    let obj = {type:'ADD_EXPENSE', payload:[name, amount, date]}
    dispatch(obj)
    console.log(expenses)
  }
  return (
    <div className="container">
      <h2>Expenses</h2>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
            {expenses.map(expense => {
                return (<tr>
                    <td>{expense.name}</td>
                    <td>{expense.amount}</td>
                    <td>{expense.date}</td>
                  </tr>)
            })}
        </tbody>
        <div id="input">
          <input placeholder="name"></input>
          <input placeholder="amount"></input>
          <input placeholder="date"></input>
          <button onClick={addRow}>Add Row</button>
        </div>
      </Table>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default ExpensesPage;
