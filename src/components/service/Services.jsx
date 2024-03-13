import React from 'react'
import './services.css'
import { GiCheckMark } from "react-icons/gi";

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer </h5>
      <h2>Services</h2>

      <div className="container container__services">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li><GiCheckMark className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur</p></li>
            <li><GiCheckMark className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur</p></li>
            <li><GiCheckMark className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur</p></li>
            <li><GiCheckMark className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur</p></li>
          </ul>
        </article>
        {/* end of UI/UX Design */}
        <article className="service">
          <div className="service__head">
            <h3>Web development</h3>
          </div>
          <ul className='service__list'>
            <li><GiCheckMark className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur</p></li>
            <li><GiCheckMark className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur</p></li>
            <li><GiCheckMark className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur</p></li>
            <li><GiCheckMark className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur</p></li>
            <li><GiCheckMark className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur</p></li>
            <li><GiCheckMark className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur</p></li>
            <li><GiCheckMark className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur</p></li>
          </ul>
        </article>
        {/* end of  Web Development */}
        <article className="service">
          <div className="service__head">
            <h3>Application Development</h3>
          </div>
          <ul className='service__list'>
            <li><GiCheckMark className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur</p></li>
            <li><GiCheckMark className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur</p></li>
            <li><GiCheckMark className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur</p></li>
            <li><GiCheckMark className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur</p></li>
            <li><GiCheckMark className='service__list-icon' />
            <p>Lorem ipsum dolor sit amet consectetur</p></li>
          </ul>
        </article>
        {/* end of content creation */}
      </div>
    </section>
  )
}

export default Services