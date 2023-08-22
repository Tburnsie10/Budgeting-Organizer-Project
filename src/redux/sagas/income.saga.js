import { put, takeLatest } from 'redux-saga/effects';
import { useSelector } from "react-redux";



function* addIncome() {
  const income = useSelector((store) => store.newIncome);
  console.log(income)
  try {
    

    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'GET_INCOME'});
  } catch (error) {
    console.log('User get request failed', error);
  }
}


function* getIncome() {
    try {
      const response = yield fetch('/api/income');
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      const income = yield response.json();
  
      yield put({ type: 'SET_INCOME', payload: income });
    } catch (error) {
      console.log('User get request failed', error);
    }
  }


function* incomeSaga() {
  yield takeLatest('GET_INCOME', getIncome);
  yield takeLatest('ADD_INCOME', addIncome);
}

export default incomeSaga;
