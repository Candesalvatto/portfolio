import React from 'react'
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowDownCircle, ArrowDown } from 'react-bootstrap-icons';
import '../App.css';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import scrollImg from '../assets/img/scroll-down-en.svg'
import circleImg from '../assets/img/scroll-down-circle-blue.svg'



export const Banner2 = () => {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Front End Designer" ];
  const period = 2000;


  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container className='container-banner'>
        <Row className="aligh-items-center">
            <div className='welcome-hight'>
            <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
          <span className="tagline">Welcome to my Portfolio</span>
          <h1>{`Hi! I'm Candela`} <br></br><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Front End Designer"]'><span className="wrap">{text}</span></span></h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <button onClick={()=> console.log('connect')}>Download CV<ArrowDownCircle size={25}/> </button>
          </div>
}
</TrackVisibility>
</div>
<div className='scroll-circle'>
<div className='wrapper'>
    <img src={scrollImg} alt='Header Img'/>
    <div className="arrow-icon"><ArrowDown size={35} color='#3A5FCD'/></div>
    <img src={circleImg} alt='Header Img'/>
    </div>
    </div>
        </Row>
      </Container>
    </section>
  )
}
