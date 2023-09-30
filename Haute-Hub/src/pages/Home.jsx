import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "../styles/Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Loading();
    fetchProducts();
  }, []);

  const Loading = () => {
    if (loading) {
      return <div>Loading</div>;
    }
  };

  const fetchProducts = async () => {
    await fetch("http://localhost:3001/api/product", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setProducts(response);
        setLoading(false);
      });
  };

  return (
    <div>
      <h2>New Products</h2>
      <div className="card">
      {products.map((item) => {
        
        return(<ProductCard props={item}/>)
      })}
      </div>
    </div>
  );
};

export default Home;
