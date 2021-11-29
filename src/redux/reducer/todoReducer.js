import {
  DELETE_TODO,
  DONE_TODO,
  FETCH_TODO,
  POST_TODO,
  UPDATE_TODO,
} from "../type/todo";

const INIT_TODO = [];

const todoReducer = (todo = INIT_TODO, action) => {
  switch (action.type) {
    case FETCH_TODO:
      return [...action.payload, ...todo];
    case POST_TODO:
      return [action.payload, ...todo];
    case DELETE_TODO:
      return todo.filter((item) => item.id !== action.payload);
    case UPDATE_TODO:
      const mytodo = todo.filter((item) => item.id !== action.payload.id);
      return [action.payload, ...mytodo];
    case DONE_TODO:
      return;
    default:
      return todo;
  }
};

export default todoReducer;
