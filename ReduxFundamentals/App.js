import React from "react";
import { Product } from "./component/product";
import './App.css'
import { useSelector } from "react-redux";
const App = () => {
  const productList = useSelector((state) => state.products);
  return (
    <div className="products-container">
      {productList.map(({ id, title, rating, price, image }) => (
        <Product
          key={id}
          title={title}
          rating={rating.rate}
          price={price}
          imageUrl={image}
        />
      ))}
    </div>
  );
};

export default App;
