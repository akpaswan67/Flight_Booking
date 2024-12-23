import React, { useState } from "react";
import "./style/Step2.css";
import Step3 from "./Step3";
function Step2({ isOpen, onClose }) {
  const [occupation, setOccupation] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  // console.log("step2");
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // onClose();
  };
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        {/* <div className='top'>
          <a>step1</a>
          <a>step2</a>
          <a>step2</a>
        </div> */}
        <div className="textbox">
          <div className="container">
            <div className="form-group">
              <label htmlFor="gender">Occupation</label>
              <select
                id="occupation"
                value={occupation}
                placeholder="Business"
                onChange={(e) => setOccupation(e.target.value)}
              >
                <option value="Business">Business</option>
                <option value="Student">Student</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="name">Company Name</label>
              <input
                type="text"
                id="name"
                value={name}
                placeholder="Suresh Rathore"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="container">
            <div className="form-group">
              <label htmlFor="gender">Company Address</label>
              <select
                id="address"
                value={address}
                placeholder="Vijay Nagar"
                onChange={(e) => setAddress(e.target.value)}
              >
                <option value="Business">Vijay Nagar</option>
                <option value="Student">Lakshi Nagar</option>
                <option value="other">Mohan Ganj</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="name">Job ID</label>
              <input
                type="text"
                id="number"
                value={number}
                placeholder="Number"
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="container">
            <div className="form-group">
              <label htmlFor="name">Guardian Name</label>
              <input
                type="text"
                id="name"
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Mobile Number</label>
              <input
                type="text"
                id="number"
                value={number}
                placeholder="Mobile Number"
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" onClick={openModal}>Save & Next</button>
          {isModalOpen 
            &&
          <Step3 isOpen={isModalOpen} onClose={closeModal} />}
        </div>
      </div>
    </div>
  );
}

export default Step2;
