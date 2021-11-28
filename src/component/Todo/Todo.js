import React, { useState } from "react";
import { Button, Header, Modal } from "semantic-ui-react";

const Todo = ({ title, description, createdAt, status }) => {
  const [show, setShow] = useState(false);

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
        trigger={<Button>See Details</Button>}
      >
        <Modal.Header>TO DO</Modal.Header>
        <Modal.Content image>
          <Modal.Description>
            <Header>{title}</Header>
            {createdAt}
            <div class="ui divider"></div>
            <p>{description}</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => setShow(false)}>
            Back
          </Button>
          <Button
            content="OK, Done"
            labelPosition="right"
            icon="checkmark"
            onClick={() => setShow(false)}
            positive
          />
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default Todo;
