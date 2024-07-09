import React, {useEffect} from 'react'
import star from '../assets/img/starW.svg'
import gsap from "gsap"



export const Banner3 = () => {

  useEffect(() => {

    const isMobile = window.matchMedia('(max-width: 767px)').matches;

    if (!isMobile) {
      gsap.fromTo(
        '.banner3 h1',
        { scale: 6, opacity: 0 },
        { duration: 1.5, scale: 1, opacity: 1, delay: 0.6, ease: 'expoScale(1, 4, power1.inOut)' }
      );

      gsap.fromTo(
        '.banner3 h2',
        { scale: 6, opacity: 0 },
        { duration: 1.5, scale: 1, opacity: 1, delay: 0.6, ease: 'expoScale(1, 4, power1.inOut)' }
      );

      gsap.to('.star-icon', {
        rotation: 360,
        duration: 5,
        ease: 'none',
      });
    }
  }, []);

  return (
    <>
    <div className='banner3'>
        <h1>CANDELA SALVATTO</h1>
        <h2>Desarrolladora Web</h2>
    </div>
    <div className='container-star'>
      <img src={star} alt='star' className='star-icon'/>
    </div>
    </>
  )
}
