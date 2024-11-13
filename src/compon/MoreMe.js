import { useEffect } from 'react'
import React from 'react'
import imgMe from'../assets/img/photome.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';


export const MoreMe = () => {

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section>
      <h2 className='moreAboutMeH2' data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-out-cubic">¿Quién soy?</h2>
        <div className='moreAboutMe'>
          
            <img src={imgMe} alt='me' data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-out-cubic"/>
            <h3 data-aos="fade-up"  data-aos-easing="ease-out-cubic" data-aos-duration="2000">Mi nombre es Candela Salvatto, de Argentina. Divertida, empática, organizada, comunicativa, adaptable. En 2022 comencé mi camino en el desarrollo web y me motiva la oportunidad de aplicar mis habilidades dentro de un equipo dinámico. Aprendí a desarrollar varios aspectos que se fusionaron para lograr crecimiento en el campo. Disfruto desafiándome a mí misma y mejorando. Diseños simples y estéticamente agradables son lo que me caracteriza. Me adapto a todo tipo de ambientes y trabajos, con buen carisma y actitud. Personalmente, me encanta la música, los animales y estar al aire libre. Un dato interesante sobre mí, también soy radióloga. </h3>
        </div>
        <div className='moreSkills'>
            <div className='skillsContainer'>
            <div className='skillsHARD' data-aos="fade-right"
     data-aos-offset="100"
     data-aos-duration="1500"
     data-aos-easing="ease-in-sine">
            <h5 data-aos="fade-up"  data-aos-easing="ease-out-cubic" data-aos-duration="1500">Herramientas de Desarrollo</h5>
            <div className='containerUL'>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>SASS</li>
                <li>JAVASCRIPT</li>
                <li>PYTHON</li>
                <li>TYPESCRIPT</li>
                <li>ANGULAR</li>
                <li>REACT</li>
                <li>REACT NATIVE</li>
                <li>NODE JS</li>
                <li>EXPRESS</li>
                <li>TAILWIND</li>
                <li>BOOTSTRAP</li>
                <li>SQL</li>
                <li>FIREBASE</li>
                <li>NoSQL</li>
                <li>GIT</li>
                <li>GITHUB</li>
                <li>DOCKER</li>
                <li>WORDPRESS</li>
                <li>FIGMA</li>
                <li>CANVA</li>
                <li>CORELDRAW</li>
                </ul>
              </div>
            </div>
            <div className='skillsSOFT' data-aos="fade-right"
     data-aos-offset="100"
     data-aos-duration="1500"
     data-aos-easing="ease-in-sine">
            <h5 data-aos="fade-up"  data-aos-easing="ease-out-cubic" data-aos-duration="1500">Habilidades Blandas</h5>
            <div className='containerUL'>
              <ul>
                <li>COMUNICACIÓN</li>
                <li>COLABORACIÓN</li>
                <li>CURIOSIDAD</li>
                <li>EMPATIA</li>
                <li>ORIENTACIÓN AL DETALLE</li>
                <li>ADAPTABILIDAD</li>
                <li>TRABAJO EN EQUIPO</li>
              </ul>
              </div>
            </div>
            <div className='skillsCert' data-aos="fade-right"
     data-aos-offset="100"
     data-aos-duration="1500"
     data-aos-easing="ease-in-sine">
            <h5 data-aos="fade-up"  data-aos-easing="ease-out-cubic" data-aos-duration="1500">Certificaciones</h5>
            <div className='containerUL'>
              <ol>
                <li>DESARROLLO DE APLICACIONES MÓBILES</li>
                <li>CODERHOUSE</li>
                <li>BACK END DEVELOPER </li>
                <li>NUCBA</li>
                <li>PYTHON </li>
                <li>CODERHOUSE</li>
                <li>REACT </li>
                <li>CODERHOUSE</li>
                <li>ANGULAR </li>
                <li>CODERHOUSE</li>
                <li>FRONT END DEVELOPER</li>
                <li>CODERHOUSE</li>

              </ol>
              </div>
            </div>
            </div>

            <div className='container-button-viewer'>
      <a href="/assets/doc/CVESPAÑOLCANDELA.pdf" download="CVESPAÑOLCANDELA.pdf"  className='button-view-projects'> DESCARGAR CV 🚀</a>
      </div>
        </div>
    </section>
  )
}
