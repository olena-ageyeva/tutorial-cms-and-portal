import React, { useState } from "react";
import { useList } from "react-firebase-hooks/database";
import TutorialDataService from "../../services/TutorialService";
import Dropdown from "react-bootstrap/Dropdown";

const EditTutorial = () => {
  const initialTutorialState = {
    key: null,
    title: "",
    description: "",
    content: "",
    published: false,
  };

  const [tutorials, loading, error] = useList(TutorialDataService.getAll());

  const [message, setMessage] = useState("");
  const [currentTutorial, setCurrentTutorial] = useState(initialTutorialState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentTutorial({ ...currentTutorial, [name]: value });
  };

  const updatePublished = (status) => {
    TutorialDataService.update(currentTutorial.key, { published: status })
      .then(() => {
        setCurrentTutorial({ ...currentTutorial, published: status });
        setMessage("The status was updated successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const setCurrent = (tutorial) => {
    const { title, description, content, published } = tutorial.val();
    setCurrentTutorial({
      key: tutorial.key,
      title,
      description,
      content,
      published,
    });
  };

  const updateTutorial = () => {
    console.log("currentTutorial", currentTutorial);
    const data = {
      title: currentTutorial.title,
      description: currentTutorial.description,
      content: currentTutorial.content,
    };

    TutorialDataService.update(currentTutorial.key, data)

      .then(() => {
        setMessage("The tutorial was updated successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteTutorial = () => {
    TutorialDataService.remove(currentTutorial.key)
      .then(() => {
        //refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="edit-form">
      <h4>Tutorial</h4>
      {error && <strong>Error: {error}</strong>}
      {loading && <span>Loading...</span>}
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">Select a Tutorial</Dropdown.Toggle>
        <Dropdown.Menu>
          {!loading &&
            tutorials.map((tutorial) => (
              <Dropdown.Item onClick={() => setCurrent(tutorial)}>
                {tutorial.val().title}
              </Dropdown.Item>
            ))}
        </Dropdown.Menu>
      </Dropdown>
      <form>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={currentTutorial.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={currentTutorial.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Description</label>
          <input
            type="text"
            className="form-control"
            id="content"
            name="content"
            value={currentTutorial.content}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>
            <strong>Status:</strong>
          </label>
          {currentTutorial.published ? "Published" : "Pending"}
        </div>
      </form>

      {currentTutorial.published ? (
        <button
          className="badge badge-primary mr-2"
          onClick={() => updatePublished(false)}
        >
          UnPublish
        </button>
      ) : (
        <button
          className="badge badge-primary mr-2"
          onClick={() => updatePublished(true)}
        >
          Publish
        </button>
      )}

      <button className="badge badge-danger mr-2" onClick={deleteTutorial}>
        Delete
      </button>

      <button
        type="submit"
        className="badge badge-success"
        onClick={updateTutorial}
      >
        Update
      </button>
      <p>{message}</p>
    </div>
  );
};

export default EditTutorial;
