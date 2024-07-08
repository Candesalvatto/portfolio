import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../App.css';
import {Container, Row, Col} from 'react-bootstrap'
import meter1 from '../assets/img/html-5.png'
import meter2 from '../assets/img/css-3.png'
import meter3 from '../assets/img/sass-lang-icon.svg'
import meter4 from '../assets/img/js.png'
import meter5 from '../assets/img/nodejs_1.png'
import meter6 from '../assets/img/react.png'
import meter7 from '../assets/img/angular-icon.svg'
import meter8 from '../assets/img/figma.png'
import meter9 from '../assets/img/Firebase.png'
import colorSharp from '../assets/img/color-sharp.png'

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
          <div className='skill-bx'>
            <h2>
                Skills
            </h2>
            <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impreso</p>
            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
              <div className='item'>
                <img src={meter1} alt='img'/>
                <h5>HTML</h5>
              </div>
              <div className='item'>
                <img src={meter2} alt='img'/>
                <h5>CSS</h5>
              </div>
              <div className='item'>
                <img src={meter3} alt='img'/>
                <h5>SASS</h5>
              </div>
              <div className='item'>
                <img src={meter4} alt='img'/>
                <h5>JAVASCRIPT</h5>
              </div>
              <div className='item'>
                <img src={meter5} alt='img'/>
                <h5>NODE JS</h5>
              </div>
              <div className='item'>
                <img src={meter6} alt='img'/>
                <h5>REACT</h5>
              </div>
              <div className='item'>
                <img src={meter7} alt='img'/>
                <h5>ANGULAR</h5>
              </div>
              <div className='item'>
                <img src={meter8} alt='img'/>
                <h5>FIGMA</h5>
              </div>
              <div className='item'>
                <img src={meter9} alt='img'/>
                <h5>FIREBASE</h5>
              </div>
            </Carousel>
          </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Img" />
    </section>
  )
}
