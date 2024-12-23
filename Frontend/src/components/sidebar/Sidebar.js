import React from "react";
import "./Sidebar.scss";
import GridViewSharpIcon from "@mui/icons-material/GridViewSharp";
import ApartmentSharpIcon from "@mui/icons-material/ApartmentSharp";
import GradingSharpIcon from "@mui/icons-material/GradingSharp";
import PeopleSharpIcon from "@mui/icons-material/PeopleSharp";
import ManageAccountsSharpIcon from "@mui/icons-material/ManageAccountsSharp";
import ReceiptSharpIcon from "@mui/icons-material/ReceiptSharp";
import ErrorIcon from "@mui/icons-material/Error";
import LanguageIcon from "@mui/icons-material/Language";
import { Link } from "react-router-dom";
const Sidebar = () => {

  return (
    <div className="sidebar">
      <div className="center">
        <div className="box">
          <Link to="/" style={{textDecoration:"none"}}>
            <GridViewSharpIcon className="icon" />
            <span>Dashboard</span>
          </Link>
        </div>
        <div className="box">
          <Link to="/property" style={{textDecoration:"none"}}>
          <ApartmentSharpIcon className="icon" />
          <span>Property</span>
          </Link>
        </div>
        <div className="box">
          <Link to="/issues" style={{textDecoration:"none"}}>
          <GradingSharpIcon className="icon" />
          <span>Issuses</span>
          </Link>
        </div>
        <div className="box">
          <Link to="/tenant" style={{textDecoration:"none"}} >
          <PeopleSharpIcon className="icon" />
          <span>Tenants</span>
          </Link>
        </div>
        <div className="box">
          <ManageAccountsSharpIcon className="icon" />
          <span>Roles</span>
        </div>
        <div className="box">
          <ReceiptSharpIcon className="icon" />
          <span>Invoice</span>
        </div>
        <div className="box">
          <ErrorIcon className="icon" />
          <span>Notice</span>
        </div>
        <div className="box">
          <LanguageIcon className="icon" />
          <span>Website Data</span>
        </div>
        <div className="box">
          <LanguageIcon className="icon" />
          <span>Amenities</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
