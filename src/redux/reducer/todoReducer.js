import { FETCH_TODO } from "../type/todo";

const INIT_TODO = [];

const todoReducer = (todo = INIT_TODO, action) => {
  switch (action.type) {
    case FETCH_TODO:
      return [...action.payload, ...todo];
    default:
      return todo;
  }
};

export default todoReducer;
