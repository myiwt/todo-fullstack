import React from "react";
import APIService from "../utils/APIService";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useNavigate } from "react-router-dom";
import { Form, Field } from "react-final-form";

export default function AddTodo() {
  const navigate = useNavigate();

  const required = (value) =>
    /[a-zA-Z0-9]/.test(value) ? undefined : "Required";

  const onSubmit = (values) => {
    APIService.create(values)
      .then((response) => {
        response.status === 201
          ? confirmAlert({
              message: "Todo added successfully",
              buttons: [
                {
                  label: "Add another",
                },
                {
                  label: "View Todo list",
                  onClick: () => {
                    navigate("/");
                  },
                },
              ],
            })
          : confirmAlert({
              message:
                "Error adding Todo - check there are no errors with the server",
              buttons: [
                {
                  label: "Ok",
                },
              ],
            });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="container">
      <div className="form-group row pt-5 justify-content-md-center">
        <div className="col-sm-6">
          <h3>Add a To do</h3>
          <div className="row pt-5">
            <Form
              onSubmit={onSubmit}
              initialValues={{
                id: 0,
                name: "",
                location: "",
                status: "todo",
              }}
              render={({
                handleSubmit,
                form,
                submitting,
                pristine,
                values,
              }) => (
                <form onSubmit={handleSubmit} className="form-group">
                  <Field name="name" validate={required}>
                    {({ input, meta }) => (
                      <div className="row">
                        <div className="col-3">
                          <label className="col-form-label" htmlFor="name">
                            Name
                          </label>
                        </div>
                        <div className="col-9">
                          <input
                            {...input}
                            type="text"
                            placeholder="Todo name"
                            className="form-control"
                            id="name"
                          />
                        </div>
                        {meta.error && meta.touched && (
                          <p style={{ color: "red" }}>{meta.error}</p>
                        )}
                      </div>
                    )}
                  </Field>
                  <Field name="location" validate={required}>
                    {({ input, meta }) => (
                      <div className="row">
                        <div className="col-3">
                          <label className="col-form-label" htmlFor="name">
                            Location
                          </label>
                        </div>
                        <div className="col-9">
                          <input
                            {...input}
                            type="text"
                            placeholder="Todo Location"
                            className="form-control"
                            id="location"
                          />
                        </div>
                        {meta.error && meta.touched && (
                          <p style={{ color: "red" }}>{meta.error}</p>
                        )}
                      </div>
                    )}
                  </Field>

                  <fieldset className="row pb-3">
                    <div className="row pt-5">
                      <div className="col-3">
                        <legend className="col-form-label pt-0">Status</legend>
                      </div>
                      <div className="col-9">
                        <div className="form-check">
                          <input
                            type="radio"
                            id={"todoStatus"}
                            name="statusRadio"
                            value="todo"
                            className="form-check-input"
                          />
                          <label
                            className="form-check-label"
                            htmlFor={"todoStatus"}
                          >
                            To do
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="radio"
                            id={"scheduledStatus"}
                            name="statusRadio"
                            value="scheduled"
                            className="form-check-input"
                          />
                          <label
                            className="form-check-label"
                            htmlFor={"scheduledStatus"}
                          >
                            Scheduled
                          </label>
                        </div>

                        <div className="form-check">
                          <input
                            type="radio"
                            id={"doneStatus"}
                            name="statusRadio"
                            value="done"
                            className="form-check-input"
                          />
                          <label
                            className="form-check-label"
                            htmlFor={"doneStatus"}
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
                        type="submit"
                        className="btn btn-primary mx-2"
                        disabled={submitting || pristine}
                      >
                        Add
                      </button>
                      <button
                        type="button"
                        onClick={form.reset}
                        className="btn btn-secondary"
                        disabled={submitting || pristine}
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                </form>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
