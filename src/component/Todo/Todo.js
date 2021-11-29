import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal } from "semantic-ui-react";
import {
  deleteTodosData,
  doneTodosData,
  updateTodosData,
} from "../../redux/action/todo";
import moment from "moment";

const Todo = ({ id, title, description, status, createdAt }) => {
  const [show, setShow] = useState(false);
  const [titleTodo, setTitleTodo] = useState(title);
  const [descriptionTodo, setDescriptionTodo] = useState(description);
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    setTitleTodo(title);
    setDescriptionTodo(description); // eslint-disable-next-line
  }, [title, description]);

  const handleDeleteSubmit = () => {
    setShow(false);
    deleteTodosData(dispatch, id);
  };

  const handleUpdateSubmit = () => {
    setShow(false);
    const timeUpdated = moment().format("YYYY-MM-DD h:mm");
    updateTodosData(
      dispatch,
      id,
      titleTodo,
      descriptionTodo,
      timeUpdated,
      todos.length
    );
  };

  const handleDoneSubmit = () => {
    setShow(false);
    const timeUpdated = moment().format("YYYY-MM-DD h:mm");
    doneTodosData(dispatch, id, titleTodo, descriptionTodo, timeUpdated);
  };

  return (
    <div className="ui card" style={{ width: "100%" }}>
      <div className="content">
        <div className="header">
          <h4>{title}</h4>
        </div>
        <div className="description">{description}</div>
      </div>

      {/* Modal */}
      <Modal
        onClose={() => setShow(false)}
        onOpen={() => setShow(true)}
        open={show}
        trigger={<Button className="ui button">See Details</Button>}
      >
        <Modal.Header>TO DO</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <div className="ui form">
              <div className="field">
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={titleTodo}
                  onChange={(event) => setTitleTodo(event.target.value)}
                />
              </div>
              {createdAt}
              <div className="ui divider"></div>
              <p>
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  value={descriptionTodo}
                  onChange={(event) => setDescriptionTodo(event.target.value)}
                />
              </p>
            </div>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button className="ui blue button" onClick={handleUpdateSubmit}>
            Update
          </Button>

          {status !== 1 ? (
            <Button
              content="Delete"
              labelPosition="right"
              icon="trash"
              onClick={handleDeleteSubmit}
              negative
            />
          ) : null}
          {status !== 1 ? (
            <Button
              content="OK, Done"
              labelPosition="right"
              icon="checkmark"
              onClick={handleDoneSubmit}
              positive
            />
          ) : null}
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default Todo;
