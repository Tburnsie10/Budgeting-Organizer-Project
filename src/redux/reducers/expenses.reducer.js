
  
  const expenses = (state = [], action) => {
    switch (action.type) {
      case 'SET_EXPENSES':
        return action.payload;
      case 'NEW_EXPENSE':
        return [...state, action.payload]
      case 'DELETE_EXPENSE':
        return state.filter((obj)=> obj.id != action.payload)
      default:
        return state;
    }
  };

  
  // user will be on the redux state at:
  // state.user
  export default expenses;
  