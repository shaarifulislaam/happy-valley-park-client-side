import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../hook/useAuth/useAuth";
import "./mybooking.css";

const MyBooking = () => {
  const [myBooking, setMyBooking] = useState([]);
  const { control, setControl, user } = useAuth();

  useEffect(() => {
    fetch(`https://still-ridge-26061.herokuapp.com/placeBooking/${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyBooking(data));
  }, [control]);

  //handle delete
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `https://still-ridge-26061.herokuapp.com/placeBooking/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Data Deleted!");
            setControl(!control);
          }
        });
    }
  };
  return (
    <div>
      <h1 className="text-center ">My Bookings : {myBooking?.length} </h1>

      <Table responsive striped bordered hover className="container">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Service Name</th>
            <th>Approve</th>
            <th>Cancel</th>
          </tr>
        </thead>
        {myBooking.map((booking, index) => (
          <tbody key={booking?._id}>
            <tr>
              <td>{index}</td>
              <td>{booking?.name}</td>
              <td>{booking?.email}</td>
              <td>{booking?.date}</td>
              <td>{booking?.service}</td>
              <td>
                <button className="btn btn-primary">
                  {booking?.status === "pending" ? "Pending" : "Approved"}
                </button>
              </td>
              <td
                className="delete-btn"
                onClick={() => handleDelete(booking?._id)}
              >
                Delete
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default MyBooking;
