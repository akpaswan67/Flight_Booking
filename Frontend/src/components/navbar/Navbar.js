import React from "react";
import "./Navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="box">
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Quick Search" />
        </div>
        <div className="items">
			<div className="item">
				<text className="text">Renson Gerald</text>
			</div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
