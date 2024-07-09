import React from 'react'
 import Khy from '../assets/img/KHYweb.png'
import Neta from '../assets/img/ByNeta.png'
import Adidas from '../assets/img/adidas.png'
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';


export const Projects = () => {

  return (
    <div className='site-p'>
      {/* <div className='web-project'>
        <img src={Khy} alt='project-3' className='web-project-img3'/>
        <h3>KHY WEB</h3>
      </div>

      <div className='web-project2 '>
        <img src={Neta} alt='project-2' className='web-project-img2' />
        <h3>By Neta</h3>
      </div>



      <div className='web-project3'>
        <img src={Adidas} alt='project-3' className='web-project-img3'/>
        <h3>Adidas Kids</h3>
      </div> */}

      <div className='web-proj-parallax'>
        <Parallax bgImage={Khy} strength={50} className='parallax-img'>
        </Parallax>
        <h3>Khy</h3>
      </div>

      <div className='web-proj-parallax2'>
        <Parallax bgImage={Neta} strength={50} className='parallax-img2'>
        </Parallax>
        <h3>By Neta</h3>
      </div>

      <div className='web-proj-parallax'>
        <Parallax bgImage={Adidas} strength={50} className='parallax-img'>
        </Parallax>
        <h3>Adidas Kids</h3>
      </div>

      <div className='container-button-viewer'>
      <Link to={"/projects"} className='button-view-projects'> VER TODOS LOS PROYECTOS 🔥</Link>
      </div>



    </div>
  )
}


