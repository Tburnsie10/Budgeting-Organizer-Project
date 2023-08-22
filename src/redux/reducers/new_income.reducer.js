
  
  const newIncome = (state = [], action) => {
    switch (action.type) {
      case 'SET_NEW_INCOME':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default newIncome;