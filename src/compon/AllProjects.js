import React, {useEffect} from 'react'
import Khy from '../assets/img/KHYweb.png'
import Neta from '../assets/img/ByNeta.png'
import Seram from '../assets/img/seram.png'
import Consul from '../assets/img/consultorio.png'
import Adidas from '../assets/img/adidas.png'
import Winni from '../assets/img/winni.png'
import Brighton from '../assets/img/British1.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import star from '../assets/img/starW.svg'
import gsap from "gsap"


export const AllProjects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    gsap.fromTo('.banner3 h1', 
      { scale: 6, opacity:0 },
      { duration: 1.5, scale: 1,opacity:1 ,delay: 0.6,  ease: "expoScale(1, 4, power1.inOut)" }
    );
     gsap.fromTo('.banner3 h2', 
    { scale: 6, opacity:0 },
    { duration: 1.5, scale: 1,opacity:1 ,delay: 0.6,  ease: "expoScale(1, 4, power1.inOut)" }
     );
     gsap.to(".star-icon", {
      scrollTrigger:{
        trigger: ".star-icon",
        toggleActions: "restart pause reverse pause",
        scrub: true,
        direction: -1,
      },
      rotation:360,
      duration:5,
      ease: "none" 

     })
  }, []);



  return (
    <div>
        <section className='box-projects'>
            <div className='h1-text'>
            <h1>Una colección de mis mejores proyectos</h1>
            <div className='container-star'>
      <img src={star} alt='star' className='star-icon'/>
    </div>
            </div>
                <article className='box-items-proj'>
                    <div className='box-item' data-aos="fade-up" data-aos-easing="ease-out-cubic">
                    <span>01</span>
                    <h2>KHY WEB</h2>
                    <div className='p'>
                    <h5>figma</h5>
                      <h5>react</h5>
                      <h5>css</h5>
                      <h5>firebase</h5>
                    </div>
                    <a href='#'>VISITAR SITIO ➚</a>
                    <img src={Khy} alt='img'/>
                    </div>

                    <div className='box-item' data-aos="fade-up" data-aos-easing="ease-out-cubic">
                    <span>02</span>
                    <h2>BY NETA</h2>
                    <div className='p'>
                    <h5>figma</h5>
                      <h5>python</h5>
                      <h5>django</h5>
                      <h5>css</h5>
                      <h5>sqlite</h5>
                    </div>
                    <a href='#'>VISITAR SITIO ➚</a>
                    <img src={Neta} alt='img'/>
                    </div>

                    <div className='box-item' data-aos="fade-up" data-aos-easing="ease-out-cubic">
                    <span>03</span>
                    <h2>SERAM</h2>
                    <div className='p'>
                    <h5>angular</h5>
                      <h5>typescript</h5>
                      <h5>ngrx</h5>
                      <h5>jasmine</h5>
                      <h5>css</h5>
                      <h5>bootstrap</h5>
                    </div>
                    <a href='#'>VISITAR SITIO ➚</a>
                    <img src={Seram} alt='img'/>
                    </div>

                    <div className='box-item' data-aos="fade-up" data-aos-easing="ease-out-cubic">
                    <span>04</span>
                    <h2>CONSULTORIO</h2>
                    <div className='p'>
                    <h5>figma</h5>
                      <h5>javascript</h5>
                      <h5>css</h5>
                      <h5>tailwind</h5>
                    </div>
                    <a href='#'>VISITAR SITIO ➚</a>
                    <img src={Consul} alt='img'/>
                    </div>

                    <div className='box-item' data-aos="fade-up" data-aos-easing="ease-out-cubic">
                    <span>05</span>
                    <h2>WINNI THE FIT</h2>
                    <div className='p'>
                    <h5>wordpress</h5>
                      <h5>elementor</h5>
                    </div>
                    <a href='#'>VISITAR SITIO ➚</a>
                    <img src={Winni} alt='img'/>
                    </div>

                    <div className='box-item' data-aos="fade-up" data-aos-easing="ease-out-cubic">
                    <span>06</span>
                    <h2>ADIDAS KIDS</h2>
                    <div className='p'>
                    <h5>worpress</h5>
                      <h5>elementor</h5>
                      <h5>woocommerce</h5>
                    </div>
                    <a href='#'>VISITAR SITIO ➚</a>
                    <img src={Adidas} alt='img'/>
                    </div>
                    <div className='box-item' data-aos="fade-up" data-aos-easing="ease-out-cubic">
                    <span>07</span>
                    <h2>BRIGHTON</h2>
                    <div className='p'>
                    <h5>wordpress</h5>
                      <h5>divi</h5>
                    </div>
                    <a href='#'>VISITAR SITIO ➚</a>
                    <img src={Brighton} alt='img'/>
                    </div>
                </article>
        </section>
    </div>
  )
}
