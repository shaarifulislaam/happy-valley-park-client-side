import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";

import useAuth from "../../hook/useAuth/useAuth";

const ServiceDetails = () => {
  const { user } = useAuth();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { bookingId } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    fetch(`https://still-ridge-26061.herokuapp.com/services/${bookingId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  const onSubmit = (data) => {
    data.status = "pending";
    fetch("http://localhost:5000/placeBooking", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("added successfully!!");

          reset();
        }
      });
    console.log(data);
  };
  return (
    <div className="row">
      <div className="col-md-6 col-lg-8 col-sm-12">
        <div className="row container-fluid">
          <div className="col-md-12 col-lg-6 col-sm-12">
            <img src={service?.img} alt="" />
          </div>
          <div className="col-md-12 col-lg-6 col-sm-12">
            <h3>{service?.name}</h3>
            <p>{service?.description}</p>
            <p>
              <small>{service?.price}</small>
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-lg-4 col-sm-12 border border">
        <h1 className="mt-5 text-center text-info">Place Order</h1>
        <div className="login-box  m-auto mt-5">
          <div className=" d-flex justify-content-center align-items-center">
            <div className="login-form mx-auto text-center">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("email", { required: true })}
                  placeholder="Email"
                  defaultValue={user.email}
                  className="p-2 m-2"
                />
                <input
                  {...register("name")}
                  placeholder="Name"
                  className="p-2 m-2"
                />

                <input
                  {...register("date", { required: true })}
                  placeholder="date"
                  className="p-2 m-2"
                  type="date"
                />

                <input
                  {...register("service", { required: true })}
                  placeholder="Service Name"
                  defaultValue={service?.name}
                  className="p-2 m-2"
                />
                <input
                  {...register("address", { required: true })}
                  placeholder="Address"
                  className="p-2 m-2"
                />
                <input
                  {...register("price", { required: true })}
                  placeholder="Price"
                  defaultValue={service?.price}
                  className="p-2 m-2"
                />
                <br />
                {errors.exampleRequired && <span>This field is required</span>}

                <input
                  type="submit"
                  value="Place Booking"
                  className="btn btn-info w-50"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
