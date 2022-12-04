import { DECREMENT, INCREMENT } from './types'

const initialState = {
    number: 0,
}

const reducer = (state = initialState, action) => {
  
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
          number: state.number + 1
      };

      case DECREMENT:
      return {
        ...state,
          number: state.number - 1
      };
    default:
      return state;
  }
}

export default reducer;
