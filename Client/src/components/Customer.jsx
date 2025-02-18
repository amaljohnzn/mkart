import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card } from 'react-bootstrap';
import profileImg from '../assets/profile.jpg';

const Customer = () => {
  const [customers, setCustomers] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileAndCustomers = async () => {
      try {
        const profileResponse = await axios.get('https://mkart-amaljohnzns-projects.vercel.app/Customer/profile', {
          withCredentials: true,
        });

        console.log("Profile Data from API:", profileResponse.data);

        if (profileResponse.data && profileResponse.data.user) {
          if (profileResponse.data.user.role === 'admin') {
            setIsAdmin(true);

            // Fetch customer list
            const customersResponse = await axios.get('https://mkart-amaljohnzns-projects.vercel.app/Customer/allCustomer', {
              withCredentials: true,
            });

            console.log("Customers Data from API:", customersResponse.data);
            setCustomers(customersResponse.data);
          }
        } else {
          console.error("Invalid profile response structure", profileResponse.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileAndCustomers();
  }, []);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (!isAdmin) {
    return <h3>Access Denied: Admins only</h3>;
  }

  return (
    <Container>
      <h1>Customer List</h1>
      {customers.length > 0 ? (
        <Row>
          {customers.map((customer) => (
            <Col key={customer.id} md={4} sm={6} xs={12} className="mb-3">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={profileImg} />
                <Card.Body>
                  <Card.Title>{customer.username}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Role: {customer.role}</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p>No customers found.</p>
      )}
    </Container>
  );
};

export default Customer;
