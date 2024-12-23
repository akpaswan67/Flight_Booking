import React from 'react';
import "./Card.css"
const Card = () => {
  return (
    <div className="card">
      <img src="https://img.freepik.com/premium-photo/home-with-garage-door_780838-240.jpg?w=2000" alt="Card Title" />
      <div className="card-body">
        <div className='left'>
		<p>Property</p>
		<p>Property Type</p>
		<p>Address</p>
		<p>Amenities</p>
		<p>Location</p>
		</div>
		<div className='right'>
		<p>Emerald Heights</p>
		<p>1 Bhk</p>
		<p>136,vijay Nagar</p>
		<p>Ac</p>
		<p>Right</p>
		</div>
      </div>
    </div>
  );
};

export default Card;
