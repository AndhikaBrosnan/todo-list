import React from "react";
import TodoList from "./Todo/TodoList";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "../redux/reducer";
import thunk from "redux-thunk";
import CreateTodo from "./Todo/CreateTodo";

const App = () => {
  return (
    <div>
      <Provider store={createStore(reducer, applyMiddleware(thunk))}>
        <CreateTodo />
        <TodoList />
      </Provider>
    </div>
  );
};

export default App;
