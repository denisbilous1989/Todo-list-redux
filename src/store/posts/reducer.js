import { SET_POSTS, REMOVE_POST } from './types'

const initialState = []

const posts = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return [
        ...state,
        ...action.payload,
      ]
      case REMOVE_POST:
        return state.filter(post => post.id !== action.payload);
    default:
      return state;
  }
}

export default posts;
