import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"

const MyNavbar = ({ isAuthenticated, user,  cartItems = [] }) => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Mkart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            

            {!isAuthenticated ? (
              <>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
              </>
            ) : (
              <>
               {user && user.role === "admin" && (
                  <>
                    <Nav.Link as={Link} to="/customer">Customer</Nav.Link>
                    <Nav.Link as={Link} to="/AdminDash">Admin Dashboard</Nav.Link>
                    <Nav.Link as={Link} to="/ProductManagment">ProductManagment</Nav.Link>
                  </>
                )}
                <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
               
               
                <Nav.Link as={Link} to="/product">Product</Nav.Link>
                <Nav.Link as={Link} to="/logout">
                  <Button variant="danger" className="ms-2">LogOut</Button>
                </Nav.Link>
            <Nav.Link as={Link} to="/cart" className="ms-auto">
              🛒 Cart <span>({cartItems.length})</span>
            </Nav.Link>

               
                
                
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
