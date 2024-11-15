import React from 'react'
import './about.css'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

          {/* <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div> */}

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Master's Degree</h5>
                  <small>Computer Science <br /><i>Pace University</i></small>
              </article>

              <article className='about__card'>
                  <BsBookmarkStar className='about__icon'/>
                  <h5>GPA</h5>
                  <small>4.0</small>
                  <small>
                  <ul>
                    <li>Graduate Merit Scholarship worth $12000</li>
                  </ul>
                  </small>
              </article>

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Domains</h5>
                  <small>
                    <ul>
                      <li>Energy</li>
                      <li>Nonprofit</li>
                      <li>Gaming</li>
                      <li>HealthCare</li>
                      <li>Education</li>
                    </ul>
                  </small>
              </article>

              

            </div>
            <p>
            I’m a Master’s student in Computer Science at Pace University, New York passionate about solving complex technical challenges and building innovative software solutions. With experience across multiple industries, including energy, nonprofits, and startups, I’ve developed scalable applications, optimized databases, and contributed to cross-functional teams. I’m proficient in full-stack development using JavaScript, Python, React, FastAPI, and SQL, and have worked on projects that impact thousands of users. I’m driven by continuous learning and enjoy applying my skills to create meaningful, efficient solutions in fast-paced environments.
                    
            </p>

          </div>
      </div>
    </section>
  )
}

export default About