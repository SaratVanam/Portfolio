import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
// import {BsMedium} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    
    <div className="header__socials">

        <a href="https://www.linkedin.com/in/saratchandravanam/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/SaratVanam" target="_blank" rel='noreferrer'><BsGithub/></a>
        {/* <a href="" target="_blank" rel='noreferrer'><BsMedium/></a> */}
    </div>
  )
}

export default HeaderSocials