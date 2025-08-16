import { useEffect, useState } from 'react'
import {
  faAws,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import python from '../../assets/images/python.png'
import aiIcon from '../../assets/images/ai.png'
import mySql from '../../assets/images/mysql.png'
import DA from '../../assets/images/da.png'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am pursuing MSc in Artificial Intelligence Systems at University of Florida, Gainesville.
          </p>

          <p>
            As an alumini of VBIT, I take pride for maintaining a stellar CGPA of 8.63 in my UG.
            Apart from that, I have developed a passion for the field of Artificial Intelligence
            and using the technology to solve complex problems.
          </p>

          <p align="LEFT">
            In addition to my technical skills in Machine Learning, Artificial Intelligence,
            Data Science, Data Analytics, and Competitive Programming, I am proficient in programming languages such as C,
            Java, Python, SQL, HTML and CSS, JavaScript, R, and MS Office.
          </p>

          <p>
            What sets me apart? Here are some highlights:
          </p>
          <ul>
            <li>
              With over 1 year of internship experience in AI & ML,
              another year as an Founder's Office Intern and 4 months in Data Analysis,
              I have gained valuable industry experience and knowledge of cutting-edge technologies and techniques.
            </li>
            <li>
              I have completed 30+ Machine Learning projects, all of which are available on my GitHub profile (Sidebar).
              These projects showcase my skills in data analysis, predictive modeling, and more.
            </li>
            <li>
              I am certified in 2 ServiceNow courses, Google Data Analysis cohort, 2 AWS Academy Courses,
              a Microsoft AI fundamentals course, a Microsoft Data Fundamentals course, and a variety of other courses.
              My love for learning inspires me to constantly seek out new opportunities to enhance my skills and knowledge.
            </li>
          </ul>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <img src={python} alt="Python" />
            </div>
            <div className="face2">
              <img src={aiIcon} alt="Artificial Intelligence" />
            </div>
            <div className="face3">
              <img src={mySql} alt="MySQL" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faAws} color="#000000" />
            </div>
            <div className="face6">
              <img src={DA} alt="Data Analytics" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
