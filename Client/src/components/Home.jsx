import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import slide1 from "../assets/welcome.png";
import main from "../assets/main.png";

const Home = () => {
  return (
    <>
      {/*  Hero Section */}
      <div
        className="text-center text-white p-5 d-flex flex-column justify-content-center align-items-center"
        style={{
          backgroundImage: `url(${slide1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "500px",
        }}
      ></div>

      <Container className="py-5">
        <Row className="align-items-center">
          {/* Left Column - Text */}
          <Col md={6}>
            <h2 className="text-center">Mkart</h2>
            <p className="mt-3 text-justify" style={{ textAlign: "justify" }}>
              Welcome to <strong>Mkart</strong>, your one-stop destination for
              all your shopping needs. Whether you're searching for the latest
              trends, unique finds, or classic essentials, we’ve got everything
              to make your shopping experience unforgettable. Our platform is
              designed to provide you with a seamless, user-friendly shopping
              experience, where convenience meets style. Browse through a wide
              range of categories, including fashion, home décor, gadgets,
              accessories, and more. Every product on our site is handpicked to
              ensure quality and satisfaction. With detailed product
              descriptions, high-resolution images, and customer reviews, we
              make it easier for you to make informed decisions. Explore
              exclusive deals, limited-time offers, and discounts available only
              on Mkart. Start shopping today at Mkart—where convenience meets
              style and savings. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Deserunt, aspernatur! Eos dignissimos id commodi
              consequuntur dolor facilis beatae, assumenda voluptate nesciunt!
              Ipsa explicabo sunt nam, veniam voluptas sint ipsam nobis tenetur,
              temporibus facere vel et commodi distinctio quam eos laboriosam
              error ratione eveniet, aperiam expedita vero! Enim distinctio
              repellat incidunt quia reprehenderit autem repellendus quibusdam
              maxime exercitationem laudantium eos, ratione tenetur minima earum
              sapiente tempora, expedita ipsam explicabo voluptatum. Laborum
              sapiente impedit animi ducimus architecto, harum autem obcaecati
              reiciendis adipisci veritatis, cumque unde deleniti error nam.
              Amet ut cum, recusandae quaerat temporibus, obcaecati perspiciatis
              nesciunt minima corrupti praesentium veniam odio a reprehenderit
              commodi. Ipsum, exercitationem! Libero molestiae nostrum magnam,
              cumque iure fuga alias suscipit cupiditate accusantium dolores
              numquam! Quod ratione molestiae tempore laborum maxime
              voluptatibus tempora nemo sunt? Possimus, tempora recusandae.
              Minima culpa repellat incidunt a velit dolorem dolores corporis
              commodi quia voluptatibus? Nam, odio asperiores. Praesentium enim
              iure possimus?
            </p>
          </Col>

          <Col md={6} className="text-center">
            <img src={main} alt="Shopping" className="img-fluid rounded" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
