import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Burger from "../../assets/hero/aa.png";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <section className="hero_section">
      <Container>
        <Row>
          <Col lg={7} className="mb-5 mb-lg-0">
            <div className="position-relative">
              <img src={Burger} className="img-fluid" alt="Hero" />
              <div className="price_badge">
                <div className="badge_text">
                  <h4 className="h4_xs">Only</h4>
                  <h4 className="h3_lg">Rs.450</h4>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="hero_text text-center">
              <h1 className="text-white">PIZZA</h1>
              <h2 className="text-white">CON CIPOLLA</h2>
              <p className="text-white pt-2 pb-4"> 
              A classic Italian pizza topped with caramelized onions, rich tomato sauce, and melted mozzarella cheese for a savory delight.
              </p>
              <Link to="/" className="btn order_now">
                Order Now
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section1;
