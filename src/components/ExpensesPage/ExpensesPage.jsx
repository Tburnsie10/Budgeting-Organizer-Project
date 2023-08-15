import React from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useSelector } from "react-redux";
import { Table } from "reactstrap";
function ExpensesPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  function addRow(event) {
    event.preventDefault();
    let tb = event.target.parentElement.querySelector("tbody");
    tb.innerHTML += `
      <tr>
        <td><input></td>
        <td><input></td>
        <td><input></td>
      </tr>
      `;
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
        <tbody></tbody>
        <div id="input">
          <input></input>
          <input></input>
          <input></input>
        </div>
        <button onClick={addRow}>Add Row</button>
      </Table>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default ExpensesPage;
