import React, { useEffect } from "react";
import Todo from "./Todo";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodosData } from "../../redux/action/todo";

const TodoList = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchTodosData(dispatch); // eslint-disable-next-line
  }, []);

  const mapOfTodos = todos.map((item, index) => (
    <Todo
      key={index}
      title={item.title}
      description={item.description}
      createdAt={item.createdAt}
      status={item.status}
    />
  ));

  return (
    <div className="ui container" style={{ paddingTop: "2%" }}>
      <div className="list" role="list">
        <h1>My Todos</h1>
        {mapOfTodos}
      </div>
    </div>
  );
};

export default TodoList;
