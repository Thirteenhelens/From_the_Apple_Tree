import "./UserPage.css";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductCard from '../ProductCardNoDesc/ProductCardNoDesc';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const products = useSelector((store) => store.products);

  console.log("products", products);
  return (
    <>
      <div>
        <h2 className="welcomeText">Welcome, {user.username}!</h2>
      </div>
      {products <= 0 ? (
        <p>
          It looks Like you don't have any favorite devices!
          <Link to="/info">here</Link> to browse.
        </p>
      ) : (
        <div>
          {products?.map((product) => {
            console.log(product);
            return <p>{product.product_name}</p>;
          })}
        </div>
      )}
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
