const initState = {
    todos: [{task:"practice mac Mojave edition "},{task:"Practice and understand developer workflow in MacBook terminal and all"},{task:"Setup react and react native environment"},{task:"practice and refresh react simple to do project"},{task:"implement redux into this todo project to under redux"}]

  }
  
  const todoReducer = (state = initState, action) => {
    console.log(action);

    if(action.type === 'DELETE_TODO'){
      //alert("we willd delete")
      let newTodos = state.todos.filter((todo,index) => {
        return index !== action.id
      });
      return {
        ...state,
        todos: newTodos
      }
      
    };

    return state;
  }
  
  export default todoReducer




  