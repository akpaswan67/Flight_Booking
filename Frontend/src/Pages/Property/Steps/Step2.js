import React, { useState } from "react";
import "./style/Step2.css";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode ==='#F5F4F8',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Step2({ isOpen, onClose }) {
  const [floor, setFlor] = useState("");
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onClose();
  };
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <form onSubmit={handleFormSubmit} className="textbox2">
			<div className="container">
				<div className="group2">
					<label htmlFor="floors">Floors</label>
					<select
						id="floor"
						value={floor}
						onChange={(e) => setFlor(e.target.value)}
					>
						<option value="grounnd">G</option>
						<option value="first">1</option>
						<option value="second">2</option>
						<option value="third">3</option>
						<option value="fourth">4</option>
					</select>
				</div>
			</div>
        <div className="nextBox">
          <label htmlFor="floors">Floors</label>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
              <Grid item xs="1.5">
                <Item>1</Item>
              </Grid>
              <Grid item xs="1.5">
                <Item>2</Item>
              </Grid>
              <Grid item xs="1.5">
                <Item>3</Item>
              </Grid>
            </Grid>
          </Box>
          {/* <p>G</p>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p> */}
        </div>
          <button type="submit">Submit</button> 
        </form>
      </div>
    </div>
  );
}

export default Step2;
