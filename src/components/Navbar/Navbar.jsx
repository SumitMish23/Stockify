import React from "react";
import { useState } from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Menu = () => {
  return (
    <nav>
      <NavLink className="navbar-item" to="/">
        Home
      </NavLink>
      <NavLink className="navbar-item" to="/watchlist">
        Watchlist
      </NavLink>
    </nav>
  );
};

const Navbar = () => {
  return (
    <div className="stocklist__navbar">
      <div className="stocklist__navbar-links">
        <div className="stocklist__links">
          <Menu />
        </div>
      </div>

      <div className="stocklist__navbar-buttons">
        <div className="stocklist__navbar-buttons-signup">
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
