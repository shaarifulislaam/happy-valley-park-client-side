import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../hook/useAuth/useAuth";
import "./mybooking.css";

const MyBooking = () => {
  const [myBooking, setMyBooking] = useState([]);
  const [control, setControl] = useState(false);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/placeBooking/${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyBooking(data));
  }, [control]);
  const handleDelete = (id) => {
    const url = `http://localhost:5000/placeBooking/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("Data Deleted!");
          //   const remaining = myBooking.filter((service) => service._id !== id);
          //   setMyBooking(remaining);
          setControl(!control);
        }
      });
  };
  return (
    <div>
      <h1 className="text-center">My Bookings : {myBooking?.length} </h1>
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
        {myBooking.map((pd, index) => (
          <tbody key={pd?._id}>
            <tr>
              <td>{index}</td>
              <td>{pd?.name}</td>
              <td>{pd?.email}</td>
              <td>{pd?.date}</td>
              <td>{pd?.service}</td>
              <th>{pd?.status}</th>
              <th className="delete-btn" onClick={() => handleDelete(pd?._id)}>
                Delete
              </th>

              {/* <button className="btn bg-danger p-2">Delete</button> */}
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default MyBooking;
