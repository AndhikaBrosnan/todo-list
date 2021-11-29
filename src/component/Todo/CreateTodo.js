import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postTodosData } from "../../redux/action/todo";
import moment from "moment";

const CreateTodo = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const todos = useSelector((state) => state.todo);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title && !description) {
      setError("Please fill title & description");
      return;
    } else if (!title) {
      setError("Please fill title.");
      return;
    } else if (!description) {
      setError("Please fill description.");
      return;
    }

    const lengthData = todos.length;
    const createdAt = moment().format("YYYY-MM-DD h:mm");
    postTodosData(dispatch, title, description, createdAt, lengthData).then();
    resetState();
  };

  const resetState = () => {
    setTitle("");
    setDescription("");
    setError("");
  };

  return (
    <div className="ui container" style={{ paddingTop: "3%" }}>
      <h1>My Todos</h1>
      <div className="ui form">
        <div className="field">
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="field">
          <label>Description</label>
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <button className="ui primary button" onClick={handleSubmit}>
          Submit
        </button>

        <span className="ui error">{error}</span>
      </div>
    </div>
  );
};

export default CreateTodo;
