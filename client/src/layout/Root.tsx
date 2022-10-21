import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../components/ui/Footer";
import Navbar from "../components/ui/Header";
import LeftSideNav from "../components/ui/LeftSideNav";
import RightSideNav from "../components/ui/RightSideNav";

const Root = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <Col className="d-none d-lg-block" lg="2">
            <LeftSideNav />
          </Col>
          <Col lg="7">
            <Outlet />
          </Col>
          <Col lg="3">
            <RightSideNav />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Root;
