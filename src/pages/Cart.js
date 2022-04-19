import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(remove(id));
  };
  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {items.map((data) => (
          <div className="cartCard" key={data.id}>
            <img src={data.image} alt="" />
            <h5>{data.title}</h5>
            <h5>{data.price}</h5>
            <button className="btn" onClick={() => handleRemove(data.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
