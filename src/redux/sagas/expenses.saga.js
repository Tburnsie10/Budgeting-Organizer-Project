import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions

//todo switch the fetch to a post, change from a get to a post to the server

function* addExpense() {
  try {
    const response = yield fetch('/api/expenses');
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    const user = yield response.json();

    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'GET_EXPENSES', payload: user });
  } catch (error) {
    console.log('User get request failed', error);
  }
}


function* getExpenses() {
    try {
      const response = yield fetch('/api/expenses');
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      const expenses = yield response.json();
  
      yield put({ type: 'SET_EXPENSES', payload: expenses });
    } catch (error) {
      console.log('User get request failed', error);
    }
  }


function* expensesSaga() {
  yield takeLatest('GET_EXPENSES', getExpenses);
  yield takeLatest('ADD_EXPENSE', addExpense);
}

export default expensesSaga;
