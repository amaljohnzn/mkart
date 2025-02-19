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

        {/* Cart & Logout - Always Visible */}
        <div className="d-flex align-items-center order-lg-2">
          <Nav.Link as={Link} to="/cart" className="position-relative me-3">
            🛒 Cart <span className="badge bg-light text-dark">{cartItems.length}</span>
          </Nav.Link>
          {isAuthenticated && (
            <Nav.Link as={Link} to="/logout">
              <Button variant="danger">LogOut</Button>
            </Nav.Link>
          )}
        </div>

        {/* Mobile Toggle Button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="order-lg-3" />

        {/* Collapsible Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center flex-column flex-lg-row text-center text-lg-start">
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
