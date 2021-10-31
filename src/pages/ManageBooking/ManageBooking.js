import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal, Table, Button } from "react-bootstrap";
import useAuth from "../../hook/useAuth/useAuth";

const ManageBooking = () => {
  const [bookings, setBookings] = useState([]);
  const { control, setControl } = useAuth();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetch("https://still-ridge-26061.herokuapp.com/placeBooking")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [control]);

  //*handle update
  const handleUpdate = (id) => {
    let data = bookings.find((booking) => booking._id == id);
    data.status = "APPROVED";

    axios
      .put(`https://still-ridge-26061.herokuapp.com/placeBooking/${id}`, data)
      .then((res) => {
        if (res) {
          alert("Approved");
          setControl(!control);
        }
      });
  };

  //*handle delete
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
            handleShow();
            setControl(!control);
          }
        });
    }
  };
  return (
    <div>
      <h1 className="text-center custom-margin">
        ALL Bookings : {bookings?.length}{" "}
      </h1>

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
                className="delete-btn text-center"
                onClick={() => handleDelete(booking?._id)}
              >
                <i class="far fa-trash-alt"></i>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> Delete Status...</Modal.Title>
        </Modal.Header>
        <Modal.Body>Data Delete Successfully!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ManageBooking;
