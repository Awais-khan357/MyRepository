import introduction from "../images/introduction.jpg";
import { Col } from "react-bootstrap";
import Heading from "./Heading";
export default function Introduction() {
  return (
    <>
      <Col md={8} className="mb-3 px-4">
        <div className="content">
          <Heading heading="Introduction" />
          <img src={introduction} className="img-fluid" />
          <div className="mt-3" style={{ fontWeight: "90px" }}>
            University of Peshawar Library is vital to the education mission of
            University of Peshawar. Overall objective of the Central Library is
            to select, organize, and maintain print and electronic resources
            that support the curriculum and information needs of University of
            peshawar academic community.
          </div>
          <h5 className="mt-3">Aim</h5>
          <div className="mt-3">
            The library aims to support the academic work by providing right
            information to the right people at right time including students,
            faculty and staff of UOP.
          </div>
          <h5 className="mt-3">Mission</h5>
          <div className="mt-3">
            To serve the advancement of teaching, learning and research within
            the university by providing solutions to the information needs of
            users through efficient, effective and innovative services. To
            herald the eagerly anticipated advancement within our society
            through the realm of information technology, promising an
            everlasting metamorphosis in the lives of our people technology.
            Let's grow together. Let's learn, teach, share and support each
            other..
          </div>
        </div>
      </Col>
    </>
  );
}
