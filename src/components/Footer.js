import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/github.png'
import navIcon3 from '../assets/img/whatsapp.png'

export const Footer = () => {
  return (
    <footer className="footer">
    <Container>
      <Row className="align-items-center">
        <Col size={12} sm={6}>
          <img src={logo} alt="Logo" />
        </Col>
        <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/candelasalvatto/"><img src={navIcon1} alt="socialIcon" /></a>
            <a href="https://github.com/Candesalvatto"><img src={navIcon2} alt="socialIcon" /></a>
            <a href="https://wa.me/5493472523911"><img src={navIcon3} alt="socialIcon" /></a>
          </div>
          <p>Copyright 2024. All Rights Reserved</p>
        </Col>
      </Row>
    </Container>
  </footer>
  )
}
