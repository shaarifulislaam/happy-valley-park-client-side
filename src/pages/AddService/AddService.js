import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./addService.css";

const AddService = () => {
  const {
    register,
    reset,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("added successfully!!");

          reset();
        }
      });
  };
  return (
    <div>
      <h1 className="mt-5 text-center text-info">
        Please register As a Volunteer
      </h1>
      <div className="login-box w-75 m-auto mt-5">
        <div className=" border border d-flex justify-content-center align-items-center">
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

              <input type="submit" className="btn btn-info w-50 my-3" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;