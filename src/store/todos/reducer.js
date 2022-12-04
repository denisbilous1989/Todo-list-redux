import { ADD_TODO, REMOVE_TODO, CHEK_TODO } from './types'

const initialState = [];

const reducer = (state = initialState, action) => {
  
  switch (action.type) {
    case ADD_TODO: 
    return [
      ...state,
      action.payload,
    ]
    case REMOVE_TODO: {
      return state.filter((todo) => todo.id !== action.payload)
    }
    case CHEK_TODO:
      return state.map(todo => {
        if (action.payload === todo.id) {
          return {
            ...todo,
          checked: !todo.checked
          }
        }
        return todo;
      })
    default:
      return state;
  }
}

export default reducer;
