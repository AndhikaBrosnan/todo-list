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

  const mapOfUndoneTodos = todos.map((item, index) =>
    item.status === 0 ? (
      <Todo
        key={index}
        id={item.id}
        title={item.title}
        description={item.description}
        createdAt={item.createdAt}
        status={item.status}
      />
    ) : null
  );

  const mapOfDoneTodos = todos.map((item, index) =>
    item.status === 1 ? (
      <Todo
        key={index}
        id={item.id}
        title={item.title}
        description={item.description}
        createdAt={item.createdAt}
        status={item.status}
      />
    ) : null
  );

  return (
    <div className="ui container" style={{ paddingTop: "2%" }}>
      <div className="list" role="list">
        {mapOfUndoneTodos}
        <div
          style={{ background: "#00d600", height: "8px" }}
          className="ui divider"
        ></div>
        <h3>Completed</h3>
        <div>{mapOfDoneTodos}</div>
      </div>
    </div>
  );
};

export default TodoList;
