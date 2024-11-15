import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/quickbook.jpeg'
import IMG2 from '../../assets/movieverse.jpeg'
import IMG3 from '../../assets/portfolio.png'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>QuickBook</h3>
            <small className='text-light'>React, NodeJS, Express, MySQL, MongoDB, Redis</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/SaratVanam/QuickBook" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>MovieVerse</h3>
            <small className='text-light'>React, NodeJS, Axios, Tailwind</small>
            <div className="portfolio__item-cta">
              <a href="https://movieverse20.netlify.app" target="_blank" rel='noreferrer' className='btn'>Visit Site</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG3} alt="" />
            </div>
            <h3>My Portfolio(This website)</h3>
            <small className='text-light'>ReactJs</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/SaratVanam" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
            
        </article>
        
      </div>
    </section>
  )
}

export default Myprojects