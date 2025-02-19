import React, { useState } from "react";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";

const Payment = () => {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardHolder: "",
  });

  const [addressDetails, setAddressDetails] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddressDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment and address submitted!");
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Checkout</h2>
      <Row>
        {/* Address Section */}
        <Col md={6}>
          <Card className="p-4 shadow rounded">
            <Card.Body>
              <h4>Billing Address</h4>
              <Form.Group className="mb-3">
                <Form.Label>Street Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter street address"
                  name="street"
                  value={addressDetails.street}
                  onChange={handleAddressChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter city"
                  name="city"
                  value={addressDetails.city}
                  onChange={handleAddressChange}
                  required
                />
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter state"
                      name="state"
                      value={addressDetails.state}
                      onChange={handleAddressChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter zip code"
                      name="zip"
                      value={addressDetails.zip}
                      onChange={handleAddressChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        {/* Payment Section */}
        <Col md={6}>
          <Card className="p-4 shadow rounded">
            <Card.Body>
              <h4>Payment Details</h4>
              <Form.Group className="mb-3">
                <Form.Label>Cardholder Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter cardholder name"
                  name="cardHolder"
                  value={cardDetails.cardHolder}
                  onChange={handleCardChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Card Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter card number"
                  name="cardNumber"
                  value={cardDetails.cardNumber}
                  onChange={handleCardChange}
                  maxLength="16"
                  required
                />
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Expiry Date</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="MM/YY"
                      name="expiryDate"
                      value={cardDetails.expiryDate}
                      onChange={handleCardChange}
                      maxLength="5"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>CVV</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter CVV"
                      name="cvv"
                      value={cardDetails.cvv}
                      onChange={handleCardChange}
                      maxLength="3"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Submit Button */}
      <Row className="mt-4">
        <Col md={{ span: 6, offset: 3 }}>
          <Button variant="primary" type="submit" className="w-100 shadow" onClick={handleSubmit}>
            Submit Payment
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Payment;
