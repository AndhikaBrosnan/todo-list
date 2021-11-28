import { fetchTodos } from ".";
import { FETCH_TODO } from "../type/todo";

export const fetchTodosData = async (dispatch) => {
  const response = await fetchTodos();
  dispatch({
    type: FETCH_TODO,
    payload: response,
  });
};
