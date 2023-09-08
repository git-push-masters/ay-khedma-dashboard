import React from "react";
import "./product.scss";
import { singleProduct } from "../../data";
import Single from "../../components/single/Single";
const Product = () => {
  return (
    <div>
      <Single {...singleProduct} />
    </div>
  );
};

export default Product;
