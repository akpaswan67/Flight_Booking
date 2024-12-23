import React from "react";
import "./Main.scss";
import ApartmentSharpIcon from "@mui/icons-material/ApartmentSharp";
import PeopleSharpIcon from "@mui/icons-material/PeopleSharp";
import PropCard from "../PorpertyCards/PropCard";
import { CircularProgress } from "@mui/material";
const Main = () => {
  return (
    <div className="main">
      <div className="box">
        <h2>Overview</h2>
        <div className="container">
          <div className="boxes">
            <div className="leftside">
              <br />
              <div className="logo">
                <ApartmentSharpIcon className="icon" />
              </div>
              <h3>353</h3>
              <p>Total Issues </p>
            </div>
            <div className="rightside">
              <CircularProgress
                variant="determinate"
                value={70}
                className="progress1"
              />
            </div>
          </div>
          <div className="boxes">
            <div className="leftside">
              <br />
              <div className="logo2">
              <img
              src="https://png.pngtree.com/png-vector/20190302/ourlarge/pngtree-vector-rent-icon-png-image_719052.jpg"
              alt=""
              className="avatar"
            />
              </div>
              <h3>$6,875</h3>
              <p>Total Rent </p>
            </div>
            <div className="rightside">
              <div className="content">
              <h3>$5,875</h3>
              <p>Collected </p>
              <h3>$1,000</h3>
              <p>Due</p>
              </div>
            </div>
          </div>
          <div className="boxes">
            <div className="leftside">
              <br />
              <div className="lago">
                <PeopleSharpIcon className="icon" />
              </div>
              <h3>445</h3>
              <p>Total Tenants </p>
            </div>
            <div className="rightside">
              <CircularProgress
                variant="determinate"
                value={55}
                className="progress2"
              />
            </div>
          </div>
          <div className="boxes">
            <div className="leftside">
              <br />
              <div className="logo4">
              <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6TTP0wqsR11WcZqGxymTDW9ibdzebLpdN5w&usqp=CAU"
              alt=""
              className="avatar"
            />
              </div>
              <h3>875</h3>
              <p>Total Units</p>
            </div>
            <div className="rightside">
              <CircularProgress
                variant="determinate"
                value={40}
                className="progress3"
              />
            </div>
          </div>
        </div>
        <h2>Property</h2>
        <div className="Cardbox">
          <PropCard />
          <PropCard />
        </div>
      </div>
    </div>
  );
};

export default Main;
