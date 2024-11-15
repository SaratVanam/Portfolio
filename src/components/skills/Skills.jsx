import React from 'react'
import './skills.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Skills = () => {
  return (
    <section id='experience'>

      <h5>The skills I have</h5>
      <h2>Technical Skills</h2>

      <div className="container experience__container">

        <div className="experience__frontend">
            <h3>Frontend Development</h3>

            <div className="experience__content">

              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>HTML</h4>
                  {/* <small className='text-light'>Experienced</small> */}
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>CSS</h4>
                  {/* <small className='text-light'>Intermediate</small> */}
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>React</h4>
                  {/* <small className='text-light'>Intermediate</small> */}
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Tailwind</h4>
                  {/* <small className='text-light'>Beginner</small> */}
                </div>
              </article>
            </div>
        </div>
     {/* End of frontend part */}

        <div className="experience__backend">
            <h3>Backend Development</h3>
            <div className="experience__content">

              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Node.js</h4>
                  {/* <small className='text-light'>Beginner</small> */}
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>MySQL</h4>
                  {/* <small className='text-light'>Intermediate</small> */}
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>PostgreSQL</h4>
                  {/* <small className='text-light'>Intermediate</small> */}
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>MongoDB</h4>
                  {/* <small className='text-light'>Intermediate</small> */}
                </div>
              </article>
            </div>
        </div>


        <div className="experience__backend">
            <h3>Languages</h3>
            <div className="experience__content">

              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Javascript</h4>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Python</h4>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Java</h4>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>C++</h4>
                </div>
              </article>
            </div>
        </div>


        <div className="experience__backend">
            <h3>Tools and Frameworks</h3>
            <div className="experience__content">

              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Microsoft Power Platform</h4>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Retool</h4>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>ServiceNow</h4>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>AWS</h4>
                </div>
              </article>
            </div>
        </div>
      </div>

      
    </section>
  )
}

export default Skills