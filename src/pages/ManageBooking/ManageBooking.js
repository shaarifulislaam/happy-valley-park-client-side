import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../hook/useAuth/useAuth";

const ManageBooking = () => {
  const [bookings, setBookings] = useState([]);
  //   const [control, setControl] = useState(false);
  const { control, setControl } = useAuth();
  useEffect(() => {
    fetch("http://localhost:5000/placeBooking")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [control]);

  const handleUpdate = (id) => {
    bookings.status = "APPROVED";
    console.log(bookings.status);
    axios
      .put(`http://localhost:5000/placeBooking/${id}`, bookings.status)
      .then((res) => {
        if (res) {
          alert("Approved");
          setControl(!control);
        }
      });
  };

  //handle delete
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `http://localhost:5000/placeBooking/${id}`;
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
      <h1 className="text-center">ALL Bookings : {bookings?.length} </h1>

      <Table responsive striped bordered hover className="container">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Service Name</th>
            <th>Approve</th>
            <th>Delete</th>
          </tr>
        </thead>
        {bookings.map((booking, index) => (
          <tbody key={booking?._id}>
            <tr>
              <td>{index}</td>
              <td>{booking?.name}</td>
              <td>{booking?.email}</td>
              <td>{booking?.date}</td>
              <td>{booking?.service}</td>
              <td>
                <button
                  onClick={() => handleUpdate(booking._id)}
                  className="btn btn-primary"
                >
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

export default ManageBooking;
