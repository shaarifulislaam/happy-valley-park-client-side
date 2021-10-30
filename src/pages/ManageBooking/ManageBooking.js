import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const ManageBooking = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/placeBooking")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  return (
    <div>
      <h1 className="text-center">All Bookings : {bookings?.length} </h1>
      <Table striped bordered hover className="container">
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
        {bookings.map((pd, index) => (
          <tbody key={pd?._id}>
            <tr>
              <td>{index}</td>
              <td>{pd?.name}</td>
              <td>{pd?.email}</td>
              <td>{pd?.date}</td>
              <td>{pd?.service}</td>
              <th>{pd?.status}</th>
              <th>Delete</th>

              {/* <button className="btn bg-danger p-2">Delete</button> */}
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default ManageBooking;
