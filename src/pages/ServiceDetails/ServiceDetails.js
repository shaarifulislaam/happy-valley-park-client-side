import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
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
  const history = useHistory();
  const [service, setService] = useState({});

  useEffect(() => {
    fetch(`https://still-ridge-26061.herokuapp.com/services/${bookingId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  const onSubmit = (data) => {
    data.status = "pending";
    fetch("https://still-ridge-26061.herokuapp.com/placeBooking", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Data added successfully!");
          reset();
          history.push("/myBooking");
        }
      });
  };
  return (
    <div className="row ">
      <div className="col-md-6 col-lg-8 col-sm-12">
        <div className="row container-fluid mt-lg-5">
          <div className="col-md-12 col-lg-6 col-sm-12">
            <img className="mt-lg-5" src={service?.img} alt="" />
          </div>
          <div className="col-md-12 col-lg-6 col-sm-12 custom-height">
            <h3 className="mt-5">{service?.name}</h3>
            <p>{service?.description}</p>
            <p className="service-price">Fee : {service?.price} BDT</p>
          </div>
        </div>
      </div>

      {/* place order  */}
      <div className="col-md-6 col-lg-4 col-sm-12 border border p-1 mt-2 custom-con">
        <h1 className="mt-3 text-center text-info">Place Order</h1>
        <div className="login-box  m-auto mt-3">
          <div className=" d-flex justify-content-center align-items-center">
            <div className="login-form mx-auto text-center">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("email")}
                  placeholder="Email"
                  value={user.email}
                  className="p-2 m-2"
                />
                <input
                  {...register("name")}
                  placeholder="Name"
                  defaultValue={user.displayName}
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
                  value={service?.name}
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
                  value={service?.price}
                  className="p-2 m-2"
                />
                <br />
                {errors.exampleRequired && <span>This field is required</span>}

                <input
                  type="submit"
                  value="Place Booking"
                  className="custom-btn mb-2"
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
