import axios from 'axios';
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';
export const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
export const API_KEY = '?key=123';

export default function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values, callback) {
  const request = axios
    .post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());
  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPost(postId) {
  const request = axios.get(`${ROOT_URL}/posts/${postId}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(postId, callback) {
  const request = axios
    .delete(`${ROOT_URL}/posts/${postId}${API_KEY}`)
    .then(() => callback());

  return {
    type: DELETE_POST,
    payload: postId
  };
}
