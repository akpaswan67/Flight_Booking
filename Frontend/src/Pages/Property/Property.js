import React, { useState } from "react";
import "./Styles/Property.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Button} from "@mui/material";
import Card from "./Card/Card"
import Step1 from "./Steps/Step1";
const Property = () => {
  const [property, setType] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="dash">
      <div className="side">
        <Sidebar />
        <div className="nav">
          <Navbar />
          <div className="dashboard">
            <din className="container">
              <h2>Property_Detail</h2>
              <div className="form-group2">
                <select
                  id="property"
                  value={property}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="">Vacant,Occupied</option>
                  <option value="vacant">Vacant</option>
                  <option value="occupied">Occupied</option>
                </select>
              </div>
              <div className="btn">
                <Button variant="contained" onClick={openModal}>
                  Create Properties
                </Button>
                <Step1 isOpen={isModalOpen} onClose={closeModal} />
              </div>
            </din>
            <div className="cards">
            <Card/>
            <Card/>
            <Card/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Property;
