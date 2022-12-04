import { ADD_TODO, REMOVE_TODO, CHEK_TODO, IS_EMPTY_TODO } from './types'


export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  }
}

export const removeTodo = (payload) => ({
  type: REMOVE_TODO,
  payload
})

export const checkTodo = (payload) => ({
  type: CHEK_TODO,
  payload,
})

export const isEmptyTodo = (payload) => ({
  type: IS_EMPTY_TODO,
})
