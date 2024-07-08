import React, {useEffect} from 'react'
import { ArrowUpRight } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import star from "../assets/img/SCROLL-STAR.png"



export const Contact3 = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".web-project-img", {
      scrollTrigger: {
        trigger: ".web-project-img",
        start: "top center",
        end: "top 50px",
        scrub: false,
        pin: false,
        markers: false
      },
      scale: 1.5,
      ease: "back.out(1.7)",
      duration: 2
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  return (
    <section className='contact-me'>
        <Link to='/write-me'  className='connect'>Conectémos</Link>
        <div className='container-text-span-all'>
        <div className='container-text-span'>
        <span className='text-span-13'>escribime un </span>
        <span className='text-span-6'>email</span>
        </div>
        <span className='text-span-link'>cande.salvatto12@gmail.com</span>
        </div>
        <div className='container-hr'>
            <hr/>
        <h3>o</h3>
        <hr/>
        </div>
        <div className='social'>
        <a href='https://www.linkedin.com/in/candelasalvatto/' className='social-link' target="blank">Linkedin <ArrowUpRight/> </a>
        <a href='https://github.com/Candesalvatto' className='social-link' target="blank">Github <ArrowUpRight/> </a>
        <a href='https://wa.me/5493472523911' className='social-link' target="blank">Whatsapp <ArrowUpRight/> </a>
        </div>
        <div className='scroll-top'>
        <button onClick={scrollToTop} className="scroll-to-top-button"> <img src={star} alt='star-scroll'/></button>
        </div>

    </section>
  )
}
