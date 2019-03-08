import { ADD_TODO } from '../actions'

// Initial state upon app start
const initialState = {
  todoList: [
    {id: 1, text: "Clean", completed: false},
    {id: 2, text: "Coding", completed: false},
    {id: 3, text: "Work", completed: false},
  ]
}

// Reducer that handles action cases
export default (state = initialState, action) => {
  switch(action.type) {
    
    case ADD_TODO:
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false
      }
      return { ...state, 
        todoList: [...state.todoList, newTodo],
      }
      
    default:
    return state;
  }
}