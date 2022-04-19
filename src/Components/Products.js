import React, { useEffect, useState } from "react";

const Products = () => {
  const [product, setproduct] = useState([]);

  const fetchproduct = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setproduct(data);
  };

  useEffect(() => {
    fetchproduct();
  }, []);

  return (
    <div className="productsWrapper">
      {product.map((data) => (
        <div className="card" key={data.id}>
          <img src={data.image} alt="" />
          <h4>{data.title}</h4>
          <h5>{data.price}</h5>
          <button className="btn">Add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
