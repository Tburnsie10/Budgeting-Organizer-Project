import React, { useEffect } from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "reactstrap";
import "./IncomePage.css";

function IncomePage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const income = useSelector((store) => store.income);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  console.log(income);

  function handleDelete(event) {
    let id = event.target.id;

    fetch(`/api/income/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    dispatch({type:"DELETE_INCOME", payload:`${id}`})
  }

  useEffect(() => {
    fetch('/api/income').then((response) => response.json())
    .then(data => {
      dispatch({type:"SET_INCOME", payload:data})
    })
  }, []);
  console.log(income);

  function addRow(event) {
    event.preventDefault();
    console.log(event);
    let inputs = event.target.parentElement.querySelectorAll("input");
    console.log(inputs);
    let name = inputs[0].value;
    let amount = inputs[1].value;
    let date = inputs[2].value;

    for (let input of inputs) {
      input.value = "";
    }

    console.log(income);

    fetch("/api/income", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([name, amount, date, user.id]),
    });

    dispatch({
      type: "NEW_INCOME",
      payload: { income_name: name, amount: amount, income_date: date },
    });

    document.location.reload()
  }

  function incomeTotal() {
    let total = 0;
    income.map((item) => {
      total += Number(item.amount);
    });
    return total;
  }

  return (
    <div className="container">
      <h2>Incomes</h2>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {income.map((item) => {
            return (
              <tr id={item.id}>
                <td>{item.income_name}</td>
                <td>{item.amount}</td>
                <td>{item.income_date.split("T")[0]}</td>
                <td>
                  <button onClick={handleDelete} id={item.id}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className="top"><h3>Total Income:{incomeTotal()}</h3></div>
      <div id="input">
        <input placeholder="name"></input>
        <input type="number" placeholder="amount"></input>
        <input type="date" placeholder="date"></input>
        <button onClick={addRow}>Add Row</button>
      </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default IncomePage;