import React from "react";
import { ListGroup, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Cart = ({ cartItems, removeFromCart }) => {
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.productPrice, 0);

  if (cartItems.length === 0) {
    return (
      <Container className="text-center mt-5">
        <Alert variant="info">Your cart is empty!</Alert>
      </Container>
    );
  }

  const handleProceedToBuy = () => {
    navigate("/payment");
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Your Cart</h2>

      <ListGroup>
        {cartItems.map((item, index) => (
          <ListGroup.Item key={index} className="shadow-sm p-3 rounded">
            <Row className="align-items-center">
              <Col xs={8} className="text-truncate">
                <strong>{item.productname}</strong> - ${item.productPrice}
              </Col>
              <Col xs={4} className="text-end">
                <Button variant="danger" size="sm" onClick={() => removeFromCart(index)}>
                  Remove
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <Row className="mt-4 align-items-center text-center">
        <Col>
          <h4>Total: ${totalPrice.toFixed(2)}</h4>
        </Col>
        <Col>
          <Button variant="primary" className="w-100" onClick={handleProceedToBuy}>
            Proceed to Buy
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
