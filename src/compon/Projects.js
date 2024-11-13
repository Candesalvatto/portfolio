import React from 'react'
 import Khy from '../assets/img/KHYweb.png'
import Neta from '../assets/img/ByNeta.png'
import Sound from '../assets/img/Soundbanner.png'
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';


export const Projects = () => {

  return (
    <div className='site-p'>

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
        <Parallax bgImage={Sound} strength={50} className='parallax-img'>
        </Parallax>
        <h3>Sound</h3>
      </div>

      <div className='container-button-viewer'>
      <Link to={"/projects"} className='button-view-projects'> VER TODOS LOS PROYECTOS 🔥</Link>
      </div>



    </div>
  )
}


