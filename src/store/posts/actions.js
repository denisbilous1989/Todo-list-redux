import { SET_POSTS, REMOVE_POST } from './types'

export const setPosts = (payload) => ({
  type: SET_POSTS,
  payload,
})

export const removePost = (payload) => ({
  type: REMOVE_POST,
  payload,
})