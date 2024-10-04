import "./Sidebar.css";
import { Category } from "./Category/Category";
import { Price } from "./Price/Price";
import { Colors } from "./Colors/Colors";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsCart4 } from "react-icons/bs";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

export function Sidebar({ handleChange }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <RxHamburgerMenu onClick={handleShow} className="d-md-none" />
      <Offcanvas show={show} onHide={handleClose} responsive="md">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <BsCart4 className="fs-1 ms-2" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column justify-content-evenly sidebar ps-3">
          <Category handleChange={handleChange} />
          <Price handleChange={handleChange} />
          <Colors handleChange={handleChange} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
