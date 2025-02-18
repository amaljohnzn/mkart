import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import productImg from '../assets/product.png'

function Product({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5001/product", {
          withCredentials: true,
        });

        console.log("Product Data from API:", response.data);

        if (response.data.length > 0) {
          setProducts(response.data); // Store all products
        } else {
          console.error("No products found");
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {products.length > 0 ? (
          products.map((product) => (
            <Card key={product._id} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={productImg } />
              <Card.Body>
                <Card.Title>{product.productname}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Category: {product.productcategory}
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  Price: ${product.productPrice}
                </Card.Subtitle>
                <Button 
  variant="primary" 
  onClick={() => {
    console.log("Adding to cart:", product); // Debug log
    addToCart(product);
  }}
>
  Add to Cart
</Button>

              </Card.Body>
            </Card>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Product;
