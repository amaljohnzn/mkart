import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";

function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          "https://mkart-amaljohnzns-projects.vercel.app/Customer/profile",
          {
            withCredentials: true,
          }
        );
        console.log("Profile Data from API:", response.data);

        if (response.data && response.data.user) {
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

  useEffect(() => {
    console.log("Updated Profile State:", profile);
  }, [profile]);

  return (
    <>
      <Container>
        <div>
          <h1>PROFILE</h1>
          {profile ? (
            <div>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="src\assets\profile.jpg" />
                <Card.Body>
                  <Card.Title> User Name : {profile.username}</Card.Title>
                  <br />
                  <Card.Subtitle className="mb-2 text-muted">
                    User Role : {profile.role}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </Container>
    </>
  );
}
export default Profile;
