import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const item = useSelector((state) => state.cart);
  return (
    <div className="nav">
      <span className="a">E-STORE</span>
      <div>
        <Link className="navLinks" to="/">
          Home
        </Link>
        <Link className="navLinks" to="/cart">
          Cart
        </Link>
        <span className="cartCount">Cart items: {item.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
