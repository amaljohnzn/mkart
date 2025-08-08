import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container, Row, Col } from "react-bootstrap";
import profileImg from "../assets/profile.jpg";

function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          "https://mkart-seven.vercel.app/profile",
          { withCredentials: true }
        );

        console.log("Profile Data from API:", response.data);

        if (response.data?.user) {
          setProfile(response.data.user);
        } else {
          console.error("Invalid response structure", response.data);
        }
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="w-100">
        <Col sm="10" md="6" lg="4" className="mx-auto text-center">
          <h1 className="mb-4">PROFILE</h1>
          {profile ? (
            <Card className="shadow-lg">
              <Card.Img variant="top" src={profileImg} />
              <Card.Body>
                <Card.Title>Username: {profile.username}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Role: {profile.role}
                </Card.Subtitle>
              </Card.Body>
            </Card>
          ) : (
            <p>Loading...</p>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
