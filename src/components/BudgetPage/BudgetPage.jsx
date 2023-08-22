import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import ExpensesPage from '../ExpensesPage/ExpensesPage';
import IncomePage from '../IncomePage/IncomePage';


function BudgetPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      
      <IncomePage></IncomePage>
      <ExpensesPage></ExpensesPage>
      
    </div>
  );
}

// this allows us to use <App /> in index.js
export default BudgetPage;