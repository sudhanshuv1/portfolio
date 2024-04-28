import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className='font-medium sm:text-xl text-center'>{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
      {btnText}
      <img src={arrow} className='w-4 h-4 object-contain' />
    </Link>
  </div>
)

const renderContent = {
  1: (
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
      Hi, I am <span classname="font-semibold">Sudhanshu</span> 👋
      <br />
      A web developer
    </h1>
  ),
  2: (
    <InfoBox
      text = "Graduated with a Masters degree in Computer Science."
      link = "/about"
      btnText = "Learn more"
    />
  ),
  3: (
    <InfoBox
      text = "Picked up many skills by building several projects"
      link = "/projects"
      btnText = "Learn more"
    />
  ),
  4: (
    <InfoBox
      text = "Need a project done or looking for a dev? I'm just a few keystrokes away"
      link = "/contact"
      btnText = "Learn more"
    />
  ),
}


const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo