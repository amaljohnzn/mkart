import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Alert, Form, Button } from "react-bootstrap";

function Login({ setUserRole }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!username || !password) {
      setError("All fields are required");
      return;
    }

    try {
      const response = await axios.post(
        "https://mkart-amaljohnzns-projects.vercel.app/ath/login",
        { username, password },
        { withCredentials: true }
      );

      setSuccess("Login successful! Redirecting...");
      await fetchUser();

      setTimeout(() => {
        console.log("Redirecting to Profile...");
        navigate("/Profile");
      }, 2000);
      
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Try again.");
    }
  };

  return (
    <>
      <div>
        <h1>LOGIN PAGE</h1>
      </div>
      <div>
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}
        <Container>
          <Form noValidate onSubmit={handleSubmit}>
            {/* Username Field */}
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            {/* Password Field */}
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            {/* Submit Button */}
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Container>
      </div>
    </>
  );
}

export default Login;
