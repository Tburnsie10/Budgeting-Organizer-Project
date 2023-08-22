
  const income = (state = [], action) => {
    switch (action.type) {
      case 'SET_INCOME':
        return action.payload;
      case 'NEW_INCOME':
        return [...state, action.payload]
      case 'DELETE_INCOME':
        return state.filter((obj)=> obj.id != action.payload)
      default:
        return state;
    }
  };

  
  // user will be on the redux state at:
  // state.user
  export default income;
  