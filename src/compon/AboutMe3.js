import React from 'react'
import icon1 from '../assets/img/62253b6269db67b2b515b301_Explore More.svg'
import icon2 from '../assets/img/62253ba1d33c10af3e258216_push ME.svg'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'



export const AboutMe3 = () => {
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <>
    <section className='About-me'>
    <h3 className='text' data-aos="fade-up" data-aos-duration="1000">Soy una <strong> Full Stack Developer</strong> con muchos sueños y metas por alcanzar. Estoy abierta a oportunidades de colaboración donde pueda contribuir, aprender y crecer. Mi enfoque está en crear sitios web que cumplan con las expectativas de los usuarios y sean estéticamente agradables. Adapto diversas tecnologías para obtener resultados precisos. En resumen, ¡actualmente estoy buscando un nuevo proyecto donde pueda prosperar en muchos niveles diferentes!</h3>
    <div className='icon-button'>
  <Link to='/more-me' className='icon-button' data-aos="fade-up" data-aos-duration="1000">
    <img className='icon1' src= {icon1} alt='icon'/>
    <img className='icon2' src={icon2} alt='icon'/>
  </Link>
    </div>

    </section>
    <div className='translate-portfolio'>
        <h4>PORTFOLIO・</h4>
    </div>
    </>
  )
}
