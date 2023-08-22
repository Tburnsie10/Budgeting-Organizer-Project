
  
  const newExpense = (state = [], action) => {
    switch (action.type) {
      case 'SET_NEW_EXPENSE':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default newExpense;