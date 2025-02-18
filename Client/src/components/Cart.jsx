import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Cart = ({ cartItems, removeFromCart }) => {
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.productPrice, 0);

  if (cartItems.length === 0) {
    return <h2>Your cart is empty!</h2>;
  }

  const handleProceedToBuy = () => {
    navigate("/payment");
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <ListGroup>
        {cartItems.map((item, index) => (
          <ListGroup.Item key={index}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span>
                <strong>{item.productname}</strong> - ${item.productPrice}
              </span>
              <Button variant="danger" size="sm" onClick={() => removeFromCart(index)}>
                Remove
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between" }}>
        <h4>Total: ${totalPrice}</h4>
        <Button variant="primary" onClick={handleProceedToBuy}>
          Proceed to Buy
        </Button>
      </div>
    </div>
  );
};

export default Cart;
