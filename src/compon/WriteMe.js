import React from 'react'
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useState } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import contactImg from '../assets/img/img_contact.webp'
import { ArrowRight } from 'react-bootstrap-icons';
import imgStamp1 from '../assets/img/img_stamp.svg'
import imgStamp2 from '../assets/img/img_stamp_time.svg'

export const WriteMe = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      }
    
      const [formDetails, setFormDetails] = useState(formInitialDetails);
      const [buttonText, setButtonText] = useState('Enviar');
      const [status, setStatus] = useState({});
    
      const onFormUpdate = (category, value) => {
        setFormDetails({
          ...formDetails,
          [category]: value
        })
    }
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      setButtonText("Enviando...");
      let response = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });
      setButtonText("Enviado");
      let result = await response.json();
      setFormDetails(formInitialDetails);
      if (result.code === 200) {
        setStatus({ succes: true, message: 'Message sent successfully'});
      } else {
        setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
      }
    };
  return (
    <section className="write" id="connect">
      <Container className='letter'>
        <Row className="align-items-center">
          <Col size={12} md={6} className='letter-1'>
          <h1>Envíame un mensaje</h1>
            <TrackVisibility >
              {({ isVisible }) =>
                <img className= " isVisible"  src={contactImg} alt="Contact Us"/>
              }
      
            </TrackVisibility>
            <p>Envíame tu propuesta, consulta o mensaje de forma gratuita a mi correo electrónico, y responderé prontamente. Hagamos que nuestro contacto ocurra.</p>
          </Col>
          <Col size={12} md={6}>
            <div className='container-stamp'>
              <img className='imgStamp2' src={imgStamp2} alt='postal' />
              <img className='imgStamp1'src={imgStamp1} alt='postal'/>
            </div>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "" : ""}>
                <h2>para Candela</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={12} className="px-2">
                        <label for='name'>Nombre</label>
                      <input type="text" id='name' value={formDetails.firstName}  onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={12} className="px-2">
                    <label for='lastName'>Apellido</label>
                      <input type="text" id='lastName' value={formDetails.lasttName}  onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={12} className="px-2">
                    <label for='email'>Email</label>
                      <input type="email" id='email' value={formDetails.email}  onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={12} className="px-2">
                    <label for='phone'>Teléfono</label>
                      <input type="tel" id='phone' value={formDetails.phone}  onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-2">
                    <label for='message'>Mensaje</label>
                      <textarea rows="4" id='message' value={formDetails.message} onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText} <ArrowRight/></span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
