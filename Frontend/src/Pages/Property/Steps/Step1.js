import React, { useState } from "react";
import "./style/Step1.css";
import Step2 from './Step2';

function Step1({ isOpen, onClose }) {
  const [propname, setPropName] = useState("");
  const [amenities, setAmenities] = useState("");
  const [proptype, setpropType] = useState("");
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");
  const [location,setLocation]= useState("")
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          <a>1</a>
          <a>2</a>
        </div> */}
        <form onSubmit={handleFormSubmit} className="textbox">
          <div className="container">
            <div className="form-group">
              <label htmlFor="propname">Property Name</label>
              <input
                type="text"
                id="propname"
                value={propname}
                placeholder="Emerald Heights"
                onChange={(e) => setPropName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="proptype">Property Type</label>
              <select
                id="proptype"
                value={proptype}
                onChange={(e) => setpropType(e.target.value)}
              >
                <option value="flat">Flat</option>
                <option value="apartment">Apartment</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="container">
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
			  	type="text"
                id="address"
                value={address}
                placeholder="136,Vijay Nagar"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="Image">Image Upload</label>
              <input
                type="file"
                id="image"
                accept=".jpg, .jpeg, .png, .pdf" 
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
          </div>
          <div className="container">
            <div className="form-group">
			<label htmlFor="amenities">Amenities</label>
              <select
                id="amenities"
                value={amenities}
                onChange={(e) => setAmenities(e.target.value)}
              >
                <option value="ac">AC</option>
                <option value="almeera">Almeera</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input
			  	type="text"
                id="location"
                value={location}
                placeholder="136,vijay Nagar"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" onClick={openModal}>
            Save & Next
          </button>
          <Step2 isOpen={isModalOpen} onClose={closeModal} />
        </form>
      </div>
    </div>
  );
}

export default Step1;
