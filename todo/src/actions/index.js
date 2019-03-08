export const ADD_TODO = 'ADD_TODO';
export const DEL_TODO = 'DEL_TODO';

export const addTodo = todoText => {
  return { type: ADD_TODO, payload: todoText  }
};

export const delTodo = () => {
  return {type: DEL_TODO}
}