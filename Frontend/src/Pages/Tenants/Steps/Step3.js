import React, { useState } from "react";
import "./style/Step3.css";
function StepOne({ isOpen, onClose }) {
  const [rentamount, setRentamount] = useState("");
  const [date, setDate] = useState("");
  const [dueamount, setDueamount] = useState("");
  const [depoAmount, setDepoAmount] = useState("");
  const [aadhaarCard, setAadhaarCard] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log("step3")
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("close");
    onClose();
  };
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <div className="textbox1">
          <div className="container">
            <div className="form-group3">
              <label htmlFor="name">Rent Amount</label>
              <input
                type="text"
                id="rentamount"
                value={rentamount}
                placeholder="2,500"
                onChange={(e) => setRentamount(e.target.value)}
              />
            </div>
            <div className="form-group3">
              <label htmlFor="email">Rent Date</label>
              <input
                type="text"
                id="date"
                value={date}
                placeholder="27-06-23"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          <div className="container">
            <div className="form-group3">
              <label htmlFor="aadhaarCard">Agreement</label>
              <input
                type="file"
                id="aadhaarCard"
                accept=".jpg, .jpeg, .png, .pdf" 
                onChange={(e) => setAadhaarCard(e.target.files[0])}
              />
            </div>
            <div className="form-group4">
              <label htmlFor="aadhaarCard">Tenant Verification</label>
              <input
                type="file"
                id="aadhaarCard"
                accept=".jpg, .jpeg, .png, .pdf" 
                onChange={(e) => setAadhaarCard(e.target.files[0])}
              />
            </div>
          </div>
          <div className="container">
            <div className="form-group3">
              <label htmlFor="name">Lock In Period</label>
              <input
                type="text"
                id="rentamount"
                value={rentamount}
                placeholder="2,500"
                onChange={(e) => setRentamount(e.target.value)}
              />
            </div>
          </div>
          <div className="container">
            <div className="form-group3">
              <label htmlFor="name">Due Payment</label>
              <input
                type="text"
                id="dueamount"
                value={dueamount}
                placeholder="2,500"
                onChange={(e) => setDueamount(e.target.value)}
              />
            </div>
            <div className="form-group3">
              <label htmlFor="email">Date</label>
              <input
                type="text"
                id="date"
                value={date}
                placeholder="27-06-23"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          <div className="container">
            <div className="form-group3">
              <label htmlFor="name">Deposite Amount</label>
              <input
                type="text"
                id="depoAmount"
                value={depoAmount}
                placeholder="2,500"
                onChange={(e) => setDepoAmount(e.target.value)}
              />
            </div>
            <div className="form-group3">
              <label htmlFor="email">Date</label>
              <input
                type="text"
                id="date"
                value={date}
                placeholder="27-06-23"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" onClick={onClose}>Save & Next</button>
        </div>
      </div>
    </div>
  );
}

export default StepOne;
