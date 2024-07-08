import React from 'react'
import { Link } from 'react-router-dom';

export const PagenotFound = () => {
  return (
    <section className='page-not-found'>
        <div className='page'>
            <h1>
                404
            </h1>
            <h2>
                Por aquí no hay nada. Pero no te preocupes, puedes volves!
            </h2>
            <Link to={"/"} className='button-view-portfolio'>IR AL POSTFOLIO ☝🏻</Link>
        </div>
    </section>
  )
}
