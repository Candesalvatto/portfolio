import React, {  useRef, useState } from 'react';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/img_contact.webp';
import { ArrowRight } from 'react-bootstrap-icons';
import imgStamp1 from '../assets/img/img_stamp.svg';
import imgStamp2 from '../assets/img/img_stamp_time.svg';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'


export const WriteMe = () => {

  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setIsSending(true);

    const serviceID = 'default_service';
    const templateID = 'template_sy3a2u8';
    const userID = '1OGts2RANcB0Nyq8A';

    emailjs.sendForm(serviceID, templateID, formRef.current, userID)
      .then(() => {
        setIsSending(false);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: '¡Mensaje enviado con éxito!',
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            popup: 'my-swal-popup', // Clase para el contenedor del mensaje
            title: 'my-swal-title', // Clase para el título del mensaje
            confirmButton: 'my-swal-button',
            icon: 'my-swal-icon'
          }
        });
      })
      .catch((err) => {
        setIsSending(false);
        alert(JSON.stringify(err));
      });
  };



  return (
    <section className="write" id="connect">
      <Container className='letter'>
        <Row className="align-items-center">
          <Col size={12} md={6} className='letter-1'>
            <h1>Envíame un mensaje</h1>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className="isVisible" src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
            <p>Envíame tu propuesta, consulta o mensaje de forma gratuita a mi correo electrónico, y responderé prontamente. Hagamos que nuestro contacto ocurra.</p>
          </Col>
          <Col size={12} md={6}>
            <div className='container-stamp'>
              <img className='imgStamp2' src={imgStamp2} alt='postal' />
              <img className='imgStamp1' src={imgStamp1} alt='postal' />
            </div>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "" : ""}>
                  <h2>para Candela</h2>
                  <form ref={formRef} onSubmit={sendEmail} id="form">
                    <Row>
                      <Col size={12} sm={12} className="px-2">
                        <label htmlFor="from_name">Nombre</label>
                        <input type="text" name="from_name" id="from_name" />
                      </Col>
                      <Col size={12} sm={12} className="px-2">
                        <label htmlFor="from_lastname">Apellido</label>
                        <input type="text" name="from_lastname" id="from_lastname" />
                      </Col>
                      <Col size={12} sm={12} className="px-2">
                        <label htmlFor="email_id">Email</label>
                        <input type="email" name="email_id" id="email_id" />
                      </Col>
                      <Col size={12} sm={12} className="px-2">
                        <label htmlFor="phone_id">Teléfono</label>
                        <input type="tel" name="phone_id" id="phone_id" />
                      </Col>
                      <Col size={12} className="px-2">
                        <label htmlFor="message">Mensaje</label>
                        <textarea rows="4" name="message" id="message"></textarea>
                        <button type="submit" disabled={isSending}>
                          {isSending ? 'Enviando...' : 'Enviar'} <ArrowRight />
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>


    </section>
  );
};