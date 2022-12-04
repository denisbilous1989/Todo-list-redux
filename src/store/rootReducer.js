import { combineReducers } from "redux";

// import counter from './counter/reducer'
// import posts from './posts/reducer'
import todos from './todos/reducer'

const rootReducer = combineReducers({
//  counter,
//  posts,
 todos,
})

export default rootReducer;