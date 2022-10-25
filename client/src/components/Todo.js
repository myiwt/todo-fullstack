import React, { useState, useEffect } from "react";
import APIService from "../utils/APIService";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export default function Todo(props) {
  const todoId = props.id;
  const [name, setName] = useState(props.name);
  const [location, setLocation] = useState(props.location);
  const [status, setStatus] = useState(props.status);
  const [anyTodoFieldClicked, setAnyTodoFieldClicked] = useState(false);
  const refreshTodoList = props.refreshTodoList;

  function updateTodo() {
    APIService.update({
      id: todoId,
      name: name,
      location: location,
      status: status,
    })
      .then((response) => {
        response.status === 204
          ? confirmAlert({
              message: "Update successful",
              buttons: [{ label: "Ok" }],
            })
          : confirmAlert({
              message: "Error - check there are no errors on the server",
              buttons: [{ label: "Ok" }],
            });
      })
      .catch((e) => console.log(e));
    refreshTodoList();
  }

  function confirmDelete() {
    confirmAlert({
      title: "Confirm to delete",
      message: `Are you sure you want to delete?`,
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            deleteTodo();
            refreshTodoList();
          },
        },
        {
          label: "No",
        },
      ],
    });
  }

  const deleteTodo = () => {
    APIService.delete(todoId).then((response) => {
      if (response.status !== 204) {
        confirmAlert({
          message: "Could not delete - check there are no errors on the server",
          buttons: [{ label: "Ok" }],
        });
      }
    });
  };

  function onChangeName(e) {
    setName(e.target.value);
    setAnyTodoFieldClicked(true);
  }

  function onChangeLocation(e) {
    setLocation(e.target.value);
    setAnyTodoFieldClicked(true);
  }

  function onChangeStatus(e) {
    setStatus(e.target.value);
    setAnyTodoFieldClicked(true);
  }

  useEffect(() => {
    setStatus(props.status);
    setAnyTodoFieldClicked(false);
  }, [todoId]);

  return (
    <div className="form-group">
      <div className="col col-lg">
        <h3>To do</h3>
      </div>
      <div className="row pt-5">
        <div className="row">
          <div className="col-3">
            <label className="col-form-label" htmlFor="name">
              Name
            </label>
          </div>
          <div className="col-9">
            <input
              type="text"
              onChange={onChangeName}
              className="form-control"
              defaultValue={props.name}
              id="name"
              // A new key is required each time a new Todo is rendered to trigger a re-render of the defaultValue to update this field
              key={"name" + props.id}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-3">
            <label className="col-form-label" htmlFor="location">
              Location
            </label>
          </div>

          <div className="col-9">
            <input
              type="text"
              onChange={onChangeLocation}
              className="form-control"
              defaultValue={props.location}
              id="location"
              // A new key is required each time a new Todo is rendered to trigger a re-render of the defaultValue to update this field
              key={"location" + props.id}
            />
          </div>
        </div>

        <fieldset className="row pb-3">
          <div className="row pt-5">
            <div className="col-3">
              <legend className="col-form-label pt-0">Status</legend>
            </div>
            <div className="col-9">
              <div className="form-check">
                <input
                  type="radio"
                  id={"todoStatus" + props.Id}
                  name="statusRadio"
                  value="todo"
                  checked={status === "todo" ? true : false}
                  onChange={onChangeStatus}
                  className="form-check-input"
                />
                <label
                  className="form-check-label"
                  htmlFor={"todoStatus" + props.Id}
                >
                  To do
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  id={"scheduledStatus" + props.Id}
                  name="statusRadio"
                  value="scheduled"
                  checked={status === "scheduled" ? true : false}
                  onChange={onChangeStatus}
                  className="form-check-input"
                />
                <label
                  className="form-check-label"
                  htmlFor={"scheduledStatus" + props.Id}
                >
                  Scheduled
                </label>
              </div>

              <div className="form-check">
                <input
                  type="radio"
                  id={"doneStatus" + props.Id}
                  name="statusRadio"
                  value="done"
                  checked={status === "done" ? true : false}
                  onChange={onChangeStatus}
                  className="form-check-input"
                />
                <label
                  className="form-check-label"
                  htmlFor={"doneStatus" + props.Id}
                >
                  Done
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        <div className="row justify-content-end">
          <div className="col-auto">
            <button
              onClick={updateTodo}
              disabled={anyTodoFieldClicked ? false : true}
              className="btn btn-primary mx-2"
            >
              Update
            </button>
            <button onClick={confirmDelete} className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
