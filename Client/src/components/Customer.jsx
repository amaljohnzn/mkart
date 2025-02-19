import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import profileImg from "../assets/profile.jpg";

const Customer = () => {
  const [customers, setCustomers] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileAndCustomers = async () => {
      try {
        const profileResponse = await axios.get(
          "https://mkart-amaljohnzns-projects.vercel.app/Customer/profile",
          { withCredentials: true }
        );

        console.log("Profile Data from API:", profileResponse.data);

        if (profileResponse.data?.user?.role === "admin") {
          setIsAdmin(true);

          const customersResponse = await axios.get(
            "https://mkart-amaljohnzns-projects.vercel.app/Customer/allCustomer",
            { withCredentials: true }
          );

          console.log("Customers Data from API:", customersResponse.data);
          setCustomers(customersResponse.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileAndCustomers();
  }, []);

  if (loading) return <h3>Loading...</h3>;
  if (!isAdmin) return <h3>Access Denied: Admins only</h3>;

  return (
    <Container className="py-3">
      <h1 className="text-center mb-4">Customer List</h1>
      {customers.length > 0 ? (
        <Row className="g-3">
          {customers.map((customer) => (
            <Col key={customer.id} md={4} sm={6} xs={12}>
              <Card style={{ maxWidth: "100%" }} className="mx-auto shadow">
                <Card.Img
                  variant="top"
                  src={profileImg}
                  style={{ objectFit: "cover", height: "200px" }}
                />
                <Card.Body className="text-center">
                  <Card.Title>{customer.username}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Role: {customer.role}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p className="text-center">No customers found.</p>
      )}
    </Container>
  );
};

export default Customer;
