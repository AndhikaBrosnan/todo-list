import { fetchTodos } from ".";
import { DELETE_TODO, FETCH_TODO, POST_TODO, UPDATE_TODO } from "../type/todo";

export const fetchTodosData = async (dispatch) => {
  const response = await fetchTodos();
  dispatch({
    type: FETCH_TODO,
    payload: response,
  });
};

export const postTodosData = async (
  dispatch,
  title,
  description,
  createdAt,
  lengthData
) => {
  dispatch({
    type: POST_TODO,
    payload: {
      id: lengthData + 1,
      title,
      description,
      status: 0,
      createdAt,
    },
  });
};

export const deleteTodosData = async (dispatch, id) => {
  dispatch({
    type: DELETE_TODO,
    payload: id,
  });
};

export const updateTodosData = async (
  dispatch,
  id,
  title,
  description,
  createdAt,
  lengthData
) => {
  dispatch({
    type: UPDATE_TODO,
    payload: {
      id,
      title,
      description,
      status: 0,
      createdAt,
      newId: lengthData + 1,
    },
  });
};

export const doneTodosData = async () => {
  return;
};
