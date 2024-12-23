import React, { useState } from "react";
import "./Style/Issues.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import VerifiedIcon from '@mui/icons-material/Verified';
import CancelIcon from '@mui/icons-material/Cancel';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

import InputField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

const filterOptions = createFilterOptions({
	matchFrom: 'start',
	stringify: (option) => option.title,
  });

  const Action = [
	{ title: 'Resolved'},
	{ title: 'Unresolved' },
  ]
const Issues = () => {

  return (
    <div className="dash">
      <div className="side">
        <Sidebar />
        <div className="nav">
          <Navbar />
          <div className="dashboard">
            <din className="container">
              <h2>Issues</h2>
              <div className="button">
			  <Autocomplete
				id="filter-demo"
				options={Action}
				getOptionLabel={(option) => option.title}
				filterOptions={filterOptions}
				sx={{ width: 300 }}
				renderInput={(params) => <InputField {...params} label="Custom filter" />}
				/>
              </div>
			  
            </din>
            <div className="header">
              <div className="box">
                <a>Username</a>
                <a>Date</a>
                <a>Description</a>
                <a>Image</a>
                <a>Action</a>
              </div>
            </div>
            <div className="header">
              <div className="box1">
                <a>Suresh</a>
                <a>26-08-23</a>
                <a>Flow of water</a>
                <a>
				<CloudDownloadIcon className="download"/>Download
                </a>
                <a>
                  <VerifiedIcon className="one"/>
                  <CancelIcon className="two"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Issues;
