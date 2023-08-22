import React from 'react';
import {useSelector} from 'react-redux';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  const expenses = useSelector((store) => store.expenses);
  const income =  useSelector((store) => store.income);

  const getTotal = (array) => {
    let total = 0;
    array.map(x => {
      total += x.amount
    }) 
    return total;
  }



  return (
    <div className="container">
      <h1>Welcome, {user.username}!</h1>
      <h1>Your Net Income is { getTotal(income) - getTotal(expenses) }</h1>
      
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
