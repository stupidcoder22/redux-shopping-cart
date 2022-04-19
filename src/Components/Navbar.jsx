import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <span>REDUX STORE</span>
      <div>
        <Link className="navLinks" to="/">
          Home
        </Link>
        <Link className="navLinks" to="/cart">
          Cart
        </Link>
        <span className="cartCount">Cart items: 0</span>
      </div>
    </div>
  );
};

export default Navbar;
