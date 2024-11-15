import React from 'react'
import './experience.css'

const Experience = () => {
  return (
    <section id='myprojects'>

      <h5>My Work Background</h5>
      <h2>Experience</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
            {/* <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div> */}
            <h3>Con Edison</h3>
            <small className='text-light'>Software Developer Intern</small>
            <br></br>
            <small className='text-light'>October 2024 - Present</small>
            <div className="portfolio__item-cta">
              <a href="https://www.coned.com/en" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Site</a>
            </div>
              
        </article>
        <article className='portfolio__item'>
            {/* <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div> */}
            <h3>YMCA</h3>
            <small className='text-light'>Software Engineer Intern</small>
            <br></br>
            <small className='text-light'>June 2024 - September 2024</small>
            <div className="portfolio__item-cta">
              <a href="https://ymcanyc.org/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Site</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            {/* <div className="portfolio__item-image">
                <img src={IMG3} alt="" />
            </div> */}
            <h3>Winions.gg</h3>
            <small className='text-light'>Fullstack Engineer Intern</small>
            <br></br>
            <small className='text-light'>February 2024 - June 2024</small>
            <div className="portfolio__item-cta">
              <a href="https://winions.gg/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Site</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            {/* <div className="portfolio__item-image">
                <img src={IMG4} alt="" />
            </div> */}
            <h3>Pace University</h3>
            <small className='text-light'>Graduate Teaching Assistant</small>
            <br></br>
            <small className='text-light'>January 2024 - Present</small>
            <div className="portfolio__item-cta">
              <a href="https://www.pace.edu/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Site</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            {/* <div className="portfolio__item-image">
                <img src={IMG5} alt="" />
            </div> */}
            <h3>Amrita Herboceuticals</h3>
            <small className='text-light'>Software Engineer Intern</small>
            <br></br>
            <small className='text-light'>February 2022 - November 2022</small>
            <div className="portfolio__item-cta">
              <a href="https://amritaherbo.com/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Site</a>  
            </div>
            
        </article>
        <article className='portfolio__item'>
            {/* <div className="portfolio__item-image">
                <img src={IMG6} alt="" />
            </div> */}
            <h3>Tata Consultancy Services</h3>
            <small className='text-light'>Systems Engineer</small>
            <br></br>
            <small className='text-light'>June 2021 - December 2021</small>
            <div className="portfolio__item-cta">
              <a href="https://www.tcs.com/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Site</a>  
            </div>
            
        </article>
      </div>
    </section>
  )
}

export default Experience