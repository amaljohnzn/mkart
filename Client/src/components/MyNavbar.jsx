import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const MyNavbar = ({ isAuthenticated, user, cartItems = [] }) => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="py-2">
      <Container>
        {/* Brand */}
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
          Mkart
        </Navbar.Brand>

        {/* Mobile Toggle Button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex flex-column flex-lg-row text-center text-lg-start w-100">
            {/* Main Navigation Links */}
            <div className="d-flex flex-column flex-lg-row w-100">
              <Nav.Link as={Link} to="/" className="mx-2">Home</Nav.Link>

              {!isAuthenticated ? (
                <>
                  <Nav.Link as={Link} to="/register" className="mx-2">Register</Nav.Link>
                  <Nav.Link as={Link} to="/login" className="mx-2">Login</Nav.Link>
                </>
              ) : (
                <>
                  {user && user.role === "admin" && (
                    <>
                      <Nav.Link as={Link} to="/customer" className="mx-2">Customer</Nav.Link>
                      <Nav.Link as={Link} to="/AdminDash" className="mx-2">Admin Dashboard</Nav.Link>
                      <Nav.Link as={Link} to="/ProductManagment" className="mx-2">Product Management</Nav.Link>
                    </>
                  )}

                  <Nav.Link as={Link} to="/profile" className="mx-2">Profile</Nav.Link>
                  <Nav.Link as={Link} to="/product" className="mx-2">Product</Nav.Link>
                </>
              )}
            </div>

            {/* Cart & Logout - Always at Bottom on Mobile */}
            <div className="d-flex flex-column flex-lg-row align-items-center mt-auto mt-lg-0">
              <Nav.Link as={Link} to="/cart" className="mx-2 position-relative">
                🛒 Cart <span className="badge bg-light text-dark">{cartItems.length}</span>
              </Nav.Link>
              <Nav.Link as={Link} to="/logout">
                <Button variant="danger" className="ms-2">LogOut</Button>
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
