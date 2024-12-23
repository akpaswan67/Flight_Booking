import React, { useState } from "react";
import "./Styles/Tenant.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { Button } from "@mui/material";
import HouseIcon from '@mui/icons-material/House';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import VerifiedIcon from '@mui/icons-material/Verified';
import CancelIcon from '@mui/icons-material/Cancel';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DownloadForOfflineSharpIcon from '@mui/icons-material/DownloadForOfflineSharp';
import Step1 from "./Steps/Step1";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
const Tenant = () => {
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
              <h2>Tenants details</h2>
              <p>
                <DownloadForOfflineSharpIcon />
              </p>
              <div className="button">
                <Button variant="contained" onClick={openModal}>Add Tenant</Button>
                <Step1 isOpen={isModalOpen} onClose={closeModal} />
              </div>
            </din>
            <div className="header">
              <div className="box">
                <a>Name</a>
                <a>Email</a>
                <a>Age</a>
                <a>Gender</a>
                <a>AdhaarCard</a>
                <a>Bill</a>
                <a>Action</a>
              </div>
            </div>
            <div className="header">
              <div className="box1">
                <a>Suresh</a>
                <a>suresh@gmail.com</a>
                <a>26</a>
                <a>Male</a>
                <a>
                <CloudDownloadIcon className="download"/>
                </a>
                <a>
                  <HouseIcon className="icon"/>
                  <EmojiObjectsIcon className="icon" />
                </a>
                <a>
                  <VerifiedIcon className="one"/>
                  <CancelIcon className="two"/>
                  <EditRoundedIcon className="icon"/> 
                  <a1>See More</a1>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tenant;
