import React from 'react'
import Nav from '../nav/Nav'
import './header.css'
import headerImg from '../../assets/img1.png'
const Header = () => {
  return (
    <header>
      <Nav/>
      <div className="banner-container">
        <div className="left-container">
          <div className="txt-container">
          <h1 className='banner-tittle'>Create instant <br /> brief templates</h1>
          <p>Introducing Briefo, the ultimate solution to generate creative brief templates in seconds! With just a few clicks, you can provide the campaign context and sections, and Briefo will take care of the rest, saving you valuable hours. You're going to love it! Try Briefo today!</p>
          </div>
        </div>
        <div className="right-container">
          <img src={headerImg} width='50%' alt="" />
        </div>
      </div>
    </header>
  )
}

export default Header