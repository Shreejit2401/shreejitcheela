import { useEffect, useState, useRef } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './index.scss'

const experiences = [
    {
        role: "Founder's Office Intern",
        company: "Trainity",
        duration: "January 2023 - May 2024",
        description: [
            "Facilitated internal-external teamwork for tasks like Online Reputation Optimization and Course Restructuring.",
            "Composed more than 10 Data Analysis projects, demonstrating ability to select and organize relevant project content. This involves Excel, SQL, Python, Tableau, and PowerBI.",
            "Curated educational content from over 60 two-hour lectures, streamlining learning resources for enhanced accessibility and efficiency.",
            "Actively reviewed 2000 projects and addressed 300 doubts in Data Analysis, enhancing communication abilities and expertise in the field."
        ]
    },
    {
        role: "Jr. Machine Learning Associate",
        company: "EpsilonPi",
        duration: "August 2022 - August 2023",
        description: [
            "EpsilonPi is the official Machine Learning forum of Vignana Bharathi Institute of Technology",
            "Curated 3 complex datasets and designed hackathons, engaging over 200 participants from multiple institutes in advanced machine learning challenges.",
            "Co-developed an interactive leaderboard system that tracked and displayed real-time performance metrics for 50+ teams, increasing transparency and competitive engagement.",
            "Delivered a hands-on workshop to 200+ competitors, simplifying the process of data preprocessing, model building, and evaluation, resulting in 85% of teams successfully completing the task.",
            "Led and managed a team of 8 senior mentors, training over 100 junior students on foundational ML techniques, significantly enhancing their understanding of algorithms and data science concepts."
        ]
    },
    {
        role: "Salesforce Developer Intern",
        company: "SmartInternz @ Salesforce",
        duration: "April 2023 - May 2023",
        description: [
            "As part of the Virtual Internship Program I have completed the following Salesforce Trailhead modules:",
            "   1. Salesforce Fundamentals",
            "   2. Organizational Setup",
            "   3. Relationship & Process Automation",
            "   4. Types Of Flows & Security",
            "   5. Apex, Testing & Debugging",
            "   6. VS Code Setup & CLI Setup",
            "   7. Lightning Web Components (LWC) & API",
            "   8. Developer Super Set",
            "Acquired solid foundational knowledge and practical skills in Salesforce development, providing a strong basis for further growth and expertise in the field."
        ]
    },
    {
        role: "AI & ML Intern",
        company: "PerspectAI",
        duration: "November 2022 - March 2023",
        description: [
            "Spearheaded multiple Machine Learning projects with my mentor including Sentiment Analysis, Speech Emotion Recognition, Text Emotion Recognition, Finding the distance from the camera, and developing a Rasa Chatbot.",
            "Led the entire lifecycle of each project, from data collection to deploying the final models into preproduction.",
            "Mentored approximately 200 students of the National Institute of Information Technology, Neermana, Rajasthan remotely, helping them learn Image Processing, Computer Vision, etc.",
            "Developed proficiency in various tools and techniques of Machine Learning, data analysis, and model building.",
            "Worked collaboratively and effectively in cross-functional teams, resulting in the successful completion of each project."
        ]
    },
    {
        role: "AI & ML Project Intern",
        company: "Edunet Foundation",
        duration: "September 2022 - November 2022",
        description: [
            "In this Internship I have built a AI Mental Fitness Tracker using Machine Learning Algorithms using Python as part of IBM SkillsBuild Program in collaboration with Edunet Foundation and All India Council for Technical Education [A.I.C.T.E.]"
        ]
    },
    {
        role: "Data Analyst Intern",
        company: "Trainity",
        duration: "August 2022 - November 2022",
        description: [
            "Completed 8 varied Data Analysis projects, including Hiring Process Optimization, IMDB Movie Analysis, and Bank Loan Case Study, demonstrating a wide range of skills and expertise.",
            "Directed a complex portfolio encompassing eight Data Analytics projects, orchestrating problem identification, data collection, and in-depth analysis, amplifying project leadership acumen and advancing my data analysis proficiency by a significant 55%",
            "Built a solid foundation in data analysis tools, including MS Excel, SQL, Power BI, Tableau, and Python, enabling efficient data manipulation, visualization, and actionable insights.",
            "Delivered actionable insights throughout the internship, showcasing versatility in applying analytical techniques to solve real-world business challenges."
        ]
    },
    {
        role: "Machine Learning Intern",
        company: "RineX Operations",
        duration: "May 2022 - July 2022",
        description: [
            "Interned as a Machine Learning Student with Cognizance, IIT Roorkee",
            "Built 3 AI & ML projects which included Extensive EDA, Data Collection and Verification, Modelling and Evaluation. (Deployment was not included)",
            "Collaborated across teams to ensure seamless project development, enhancing the efficiency and effectiveness of our machine learning initiatives."
        ]
    },
    {
        role: "Artificial Intelligence and Machine Learning Intern",
        company: "YBI Foundation",
        duration: "February 2022 - April 2022",
        description: [
            "Successfully completed my first internship during the fourth semester of my Bachelor's program, an impressive achievement that underscores my proactive approach to gaining hands-on experience in the field of machine learning at an early stage in my academic journey.",
            "Completed a course-based internship that solidified my understanding of machine learning fundamentals during my sophomore year, providing a strong foundation for my future studies.",
            "Developed over 10 machine learning projects utilizing diverse datasets and applications at YBI Foundation, a non-profit organization, demonstrating my ability to apply theoretical knowledge to real-world challenges."
        ]
    }
];

const WorkEx = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const timelineRef = useRef(null)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <div className="container workex-container">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['W', 'o', 'r', 'k', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
                            idx={15}
                        />
                    </h1>
                </div>

                <div className="timeline" ref={timelineRef}>
                    {experiences.map((exp, index) => (
                        <TimelineItem key={index} exp={exp} index={index} />
                    ))}
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

const TimelineItem = ({ exp, index }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    }

    return (
        <>
            <motion.div
                ref={ref}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants}
                transition={{ duration: 0.5, delay: index * 0.2 }}
            >
                <div className="timeline-content">
                    <h2>{exp.role}</h2>
                    <h3>{exp.company}</h3>
                    <span>{exp.duration}</span>
                    <ul>
                        {exp.description.map((desc, i) => (
                            <li key={i}>{desc}</li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </>
    )
}

export default WorkEx