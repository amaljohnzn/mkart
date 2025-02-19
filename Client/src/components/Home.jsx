import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import slide1 from "../assets/welcome.png";
import main from "../assets/main.png";

const Home = () => {
  return (
    <>
      {/* Hero  */}
      <div
        className="text-center text-white d-flex flex-column justify-content-center align-items-center"
        style={{
          backgroundImage: `url(${slide1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "40vh", 
          width: "100%",
          position: "relative",
        }}
      ></div>

      <Container className="py-5">
        <Row className="align-items-center">
          <Col xs={12} md={6} className="order-md-1">
            <h2 className="text-center text-md-start">Mkart</h2>
            <p className="mt-3" style={{ textAlign: "justify" }}>
              Welcome to <strong>Mkart</strong>, your one-stop destination for
              all your shopping needs. Whether you're searching for the latest
              trends, unique finds, or classic essentials, we’ve got everything
              to make your shopping experience unforgettable. Our platform is
              designed to provide you with a seamless, user-friendly shopping
              experience, where convenience meets style. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quia fuga et odio perspiciatis
              recusandae a, iusto magnam atque dolore ratione nisi, eveniet
              maiores. Magni, asperiores. Debitis, modi, ut mollitia ea quasi
              sequi maiores maxime reprehenderit voluptates eveniet perspiciatis
              tenetur. Qui aperiam placeat corrupti nostrum vel maxime
              reprehenderit voluptas ratione! Accusantium deserunt at esse a
              ipsum animi harum, reiciendis inventore totam culpa alias numquam
              laudantium eligendi, voluptate architecto, provident nisi vel
              suscipit possimus sapiente maiores. Magni cumque possimus itaque
              voluptate laudantium. Error labore est, inventore reprehenderit
              voluptatibus animi eligendi hic quisquam. Est cupiditate at natus
              harum tenetur perspiciatis nobis aspernatur ex ratione animi, unde
              dolorem deserunt, quae voluptate voluptates. Quis animi,
              exercitationem veniam explicabo, quaerat doloremque modi odio
              cupiditate odit aperiam itaque aliquam voluptatem ipsam commodi
              qui assumenda ipsum! Officia tenetur voluptas aspernatur quasi
              pariatur natus fugiat minus sapiente voluptatum, maiores aliquam
              sunt incidunt, cum atque. Repellendus explicabo incidunt veniam
              blanditiis adipisci cumque magni iste at fugiat qui corrupti
              culpa, totam accusamus vitae iusto beatae. Recusandae, sit. Neque
              optio nam praesentium repellendus nemo odio reiciendis nobis, nisi
              natus saepe modi aperiam!
            </p>
          </Col>

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
