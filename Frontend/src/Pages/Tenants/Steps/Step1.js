import React, { useState } from 'react';
import "./style/Stepone.css"
import Step2 from './Step2';

function Step1({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [aadhaarCard, setAadhaarCard] = useState('');
  const [address, setAddress] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log("step1");
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
        <div className='textbox'>
        <div className='container'>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              placeholder='Suresh Rathore'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder='suresh123@gmail.com'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          </div>
          <div className='container'>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              value={age}
              placeholder='26'
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              value={gender}
              placeholder='Male'
              onChange={(e) => setGender(e.target.value)}
            >
              {/* <option value="">Select Gender</option> */}
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          </div>
          <div className='container'>
          <div className="form-group">
            <label htmlFor="aadhaarCard">Aadhaar Card Upload</label>
            <input
              type="file"
              id="aadhaarCard"
              accept=".jpg, .jpeg, .png, .pdf" 
              onChange={(e) => setAadhaarCard(e.target.files[0])}
            />
          </div>
          <div className="form-group1">
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              value={address}
              placeholder='Vijay Nagar'
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          </div>
            <button type="submit" onClick={openModal}>Save & Next</button>
            {isModalOpen &&<Step2 isOpen={isModalOpen} onClose={closeModal} />}
        </div>
      </div>
    </div>
  );
}

export default Step1;
