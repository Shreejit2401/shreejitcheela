import './index.scss'
import { useState } from 'react'
import LogoS from '../../assets/images/me.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faBlackTie,
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faCode,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <Link 
        className="logo"
        to="/"
        onClick={() => setShowNav(false)}>
        <img src={LogoS} alt="Logo" />
        <span
            style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: '100%',
            color: '#ffffff',
            letterSpacing: '0.1rem',
            display: 'block',
            marginTop: '10px',
            textAlign: 'center',
            fontWeight: 'bold'
            }}
        >
            Shreejit Cheela
        </span>
    </Link>
    <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink 
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
    </NavLink>
        <NavLink 
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
    </NavLink>
    <NavLink
          activeclassname="active"
          className="workex-link"
          to="/workex"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faBlackTie} color="#4d4d4e" />
        </NavLink>
    <NavLink
          activeclassname="active"
          className="documents-link"
          to="/docs"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/shreejitcheela/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Shreejit2401"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
        <a href="mailto:shreejit.jithu2002@gmail.com" rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              icon={faEnvelope}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a href="https://leetcode.com/u/ShreejitCheela/" rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              icon={faCode}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
    </div>
  )
}

export default Sidebar
