import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import slide1 from "../assets/welcome.png";
import main from "../assets/main.png";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="text-center text-white d-flex flex-column justify-content-center align-items-center"
        style={{
          backgroundImage: `url(${slide1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "40vh", // Adjusts dynamically
          width: "100%",
          position: "relative",
        }}
      >
        
      </div>

      {/* Content Section */}
      <Container className="py-5">
        <Row className="align-items-center">
          {/* Left Column - Text */}
          <Col xs={12} md={6} className="order-md-1">
            <h2 className="text-center text-md-start">Mkart</h2>
            <p className="mt-3" style={{ textAlign: "justify" }}>
              Welcome to <strong>Mkart</strong>, your one-stop destination for
              all your shopping needs. Whether you're searching for the latest
              trends, unique finds, or classic essentials, we’ve got everything
              to make your shopping experience unforgettable. Our platform is
              designed to provide you with a seamless, user-friendly shopping
              experience, where convenience meets style.
            </p>
          </Col>

          {/* Right Column - Responsive Image */}
          <Col xs={12} md={6} className="text-center order-md-2">
            <div className="w-100 d-flex justify-content-center">
              <img
                src={main}
                alt="Shopping"
                className="img-fluid rounded"
                style={{
                  maxWidth: "100%", // Ensures it never overflows
                  height: "auto", // Maintains aspect ratio
                  objectFit: "cover", // Prevents distortion
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
