import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import productImg from '../assets/product.png';

function Product({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://mkart-amaljohnzns-projects.vercel.app/product", {
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
    <Container className="py-4">
      <h1 className="text-center mb-4">Products</h1>
      
      <Row className="justify-content-center">
        {products.length > 0 ? (
          products.map((product) => (
            <Col key={product._id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className="shadow-sm h-100">
                <Card.Img variant="top" src={productImg} className="p-3" />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{product.productname}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Category: {product.productcategory}
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    Price: ${product.productPrice}
                  </Card.Subtitle>
                  <Button 
                    variant="primary" 
                    className="mt-auto"
                    onClick={() => {
                      console.log("Adding to cart:", product);
                      addToCart(product);
                    }}
                  >
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col xs={12} className="text-center">
            <p>Loading...</p>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default Product;
