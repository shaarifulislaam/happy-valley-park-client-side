import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./addService.css";

const AddService = () => {
  const {
    register,
    reset,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onSubmit = (data) => {
    fetch("https://still-ridge-26061.herokuapp.com/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          handleShow();

          reset();
        }
      });
  };
  return (
    <div>
      <div className="login-box w-75 m-auto mt-5 border border">
        <h1 className="mt-5 text-center ">Add As a Service</h1>
        <div className="  d-flex justify-content-center align-items-center">
          <div className="login-form mx-auto text-center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name")}
                placeholder="Name"
                className="p-2 m-2"
              />

              <input
                {...register("price", { required: true })}
                placeholder="Price"
                className="p-2 m-2 "
              />

              <textarea
                {...register("description", { required: true })}
                placeholder="Description"
                className="p-2 m-2"
              />

              <input
                {...register("img", { required: true })}
                placeholder="Image Url"
                className="p-2 m-2"
              />

              {errors.exampleRequired && <span>This field is required</span>}

              <input type="submit" className="custom-btn my-3" />
            </form>
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Added Status...</Modal.Title>
              </Modal.Header>
              <Modal.Body>Data Added Successfully!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
