import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="container  border border mt-3">
      <h1 className="text-center">Planning a Meeting or Event?</h1>
      <p>
        If you’re looking for a fun way to bring everyone on your team closer
        together, there is no better group activity than a day at Fantasy
        Kingdom. We offer a variety of turn-key programs that are easy to
        execute and can be customized to your group’s unique specifications.
        Please submit your details or you can call us at 017000000
      </p>
      <div className="login-box w-75 m-auto mt-5">
        <div className=" d-flex justify-content-center align-items-center">
          <div className="login-form mx-auto text-center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name")}
                placeholder="Your Name"
                className="p-2 m-2"
              />
              <input
                {...register("email")}
                placeholder="Email"
                className="p-2 m-2"
              />
              <input
                {...register("subject")}
                placeholder="Subject"
                className="p-2 m-2"
              />

              <textarea
                {...register("message", { required: true })}
                placeholder="Message"
                className="p-2 m-2"
              />

              {errors.exampleRequired && <span>This field is required</span>}

              <input
                type="submit"
                value="Send"
                className="btn btn-info w-50 my-3"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
