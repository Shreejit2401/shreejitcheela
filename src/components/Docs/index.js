import { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Docs = () => {
    const documents = [
        { name: 'Resume', file: `${process.env.PUBLIC_URL}/documents/resume.pdf` },
        { name: 'CV', file: `${process.env.PUBLIC_URL}/documents/cv.pdf` },
        { name: "Research Paper - 1", file: `${process.env.PUBLIC_URL}/documents/ER.pdf`},
        { name: "Research Paper - 2", file: `${process.env.PUBLIC_URL}/documents/StegaCraft.pdf`},
        { name: "Founder's Office Intern @ Trainity", file: `${process.env.PUBLIC_URL}/documents/Trainity.pdf` },
        { name: 'AI & ML Intern @ PerspectAI', file: `${process.env.PUBLIC_URL}/documents/PerspectAI.pdf` },
        { name: "ServiceNow Certified System Administrator", file: `${process.env.PUBLIC_URL}/documents/CSA.pdf` },
        { name: "ServiceNow Certified Application Developer", file: `${process.env.PUBLIC_URL}/documents/CAD.pdf` },
        { name: "Google Data Analytics", file: `${process.env.PUBLIC_URL}/documents/GDA.pdf` },
        { name: "Azure AI Fundamentals", file: `${process.env.PUBLIC_URL}/documents/MSAI.pdf`},
        { name: "Azure Data Fundaments", file: `${process.env.PUBLIC_URL}/documents/MSData.pdf`},
        { name: "AWS Machine Learning Foundations", file: `${process.env.PUBLIC_URL}/documents/AWSML.pdf`},
        { name: "AWS Data Analytics", file: `${process.env.PUBLIC_URL}/documents/AWSDA.pdf`},
        { name: "ML using Python @ Datacamp", file: `${process.env.PUBLIC_URL}/documents/MLDatacamp.pdf` }
    ];

    const [selectedDoc, setSelectedDoc] = useState(documents[0].file);
    const [loading, setLoading] = useState(true);
    const [letterClass, setLetterClass] = useState('text-animate');

    const handleButtonClick = (file) => {
        setSelectedDoc(file);
        setLoading(true);
    };

    useEffect(() => {
        const iframe = document.querySelector('iframe');
        if (iframe) {
            iframe.onload = () => setLoading(false);
        }
    }, [selectedDoc]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <div className="container docs-container">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['M', 'y', ' ', ' ', ' ', 'D', 'o', 'c', 'u', 'm', 'e', 'n', 't', 's']}
                            idx={15}
                        />
                    </h1>
                </div>
                <div className="docs-buttons">
                    {documents.map((doc, index) => (
                        <button 
                            key={index}
                            className="flat-button"
                            onClick={() => handleButtonClick(doc.file)}
                        >
                            {doc.name}
                        </button>
                    ))}
                </div>
                <div className="doc-viewer-container">
                    {loading && <Loader type="pacman" />}
                    <iframe 
                        src={selectedDoc} 
                        title="Document Viewer" 
                        className={`doc-viewer ${loading ? 'loading' : ''}`} 
                    />
                </div>
            </div>
        </>
    )
}

export default Docs;