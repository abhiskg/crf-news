import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { AiFillGithub, AiOutlineGoogle } from "react-icons/ai";
import { FaFacebook, FaTwitch, FaTwitter, FaWhatsapp } from "react-icons/fa";
import BrandCarousel from "../carousel/BrandCarousel";

const RightSideNav = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button className="mb-2" variant="outline-primary">
          <AiOutlineGoogle /> Login vai Google
        </Button>
        <Button variant="outline-dark">
          <AiFillGithub /> Login via Github
        </Button>
      </ButtonGroup>
      <div className="mt-4">
        <h5>Find us on</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2">
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaWhatsapp /> WhatsApp
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitch /> Twitch
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <div>
          <BrandCarousel></BrandCarousel>
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
