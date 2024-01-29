import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        style={{ height: "60px" }}
      >
        <Container>
          <NavLink to="/" className="text-decoration-none text-black mx-3">
            Home
          </NavLink>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" className="text-decoration-none text-black">
                Orders
              </NavLink>
            </Nav>
            <Badge
              badgeContent={4}
              color="primary"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <i
                class="fa fa-cart-plus"
                style={{ fontStyle: 20, cursor: "pointer" }}
                aria-hidden="true"
              ></i>
            </Badge>
          </Navbar.Collapse>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <div className="card_details d-flex justify-content-denter align-items-center" style={{width:"24rem",padding:10,position:"relative"}}>
            <i className=" fas fa-close smallclose" onClick={handleClose} style={{position:"absolute",top:2,right:20, fontSize:23,cursor:"pointer"}}></i>

            <p style={{fontSize:22}}> Your Cart is empty</p>
            <i class="fa-solid fa-cart-shopping" style={{width:"5rem",padding:10 }}></i>
          </div>
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;
