import React, { useEffect, useState } from "react";
import { add } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchproduct } from "../store/productSlice";
import { STATUSES } from "../store/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { data: product, status } = useSelector((state) => state.product);

  //   const fetchproduct = async () => {
  //     const res = await fetch("https://fakestoreapi.com/products");
  //     const data = await res.json();
  //     setproduct(data);
  //   };

  useEffect(() => {
    dispatch(fetchproduct());
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  if (status === STATUSES.LOADING) {
    return <h1>Loading......</h1>;
  }

  if (status === STATUSES.ERROR) {
    return <h1>Something went Wrong......</h1>;
  }

  return (
    <div className="productsWrapper">
      {product.map((data) => (
        <div className="card" key={data.id}>
          <img src={data.image} alt="" />
          <h4>{data.title}</h4>
          <h5>{data.price}</h5>
          <button className="btn" onClick={() => handleAdd(data)}>
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
