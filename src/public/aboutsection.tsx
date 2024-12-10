import React from 'react';
import '../assets/css/TeamSection.css';
import nirajan from '../assets/images/nirajan.png';
import bisnu from '../assets/images/bisnhu.png.jpeg';
import suraj from '../assets/images/suraj.png';
import anuj from '../assets/images/anuj.png';
import aadarsha from '../assets/images/aadarsha.png.jpg';

const TeamSection: React.FC = () => {
    const teamMembers = [
        { 
            name: 'Nirajan', 
            role: 'Frontend Developer', 
            image: nirajan, 
            description: 'Helped to develop system using html and css concepts' 
        },
        { 
            name: 'Bishnu', 
            role: 'UI/UX Designer', 
            image: bisnu, 
            description: 'Expert in documentations and UI concepts' 
        },
        { 
            name: 'Anuj', 
            role: 'Back-End Web Developer', 
            image: anuj, 
            description: 'Worked to manage the backend through postgresql' 
        },
        { 
            name: 'Suraj', 
            role: 'Front-End Web Developer', 
            image: suraj, 
            description: 'Managed the system using his knowledge of React & Springboot' 
        },
        { 
            name: 'Aadarsha', 
            role: 'Project Manager', 
            image: aadarsha, 
            description: 'Team captain, Project designer, and Backend developer' 
        },
    ];

    return (
        <div className="wrapper">
            <div className="title">
                <h4>पाठशाला Team</h4>
            </div>

            <div className="card_Container">
                {teamMembers.map((member, index) => (
                    <div className="card" key={index}>
                        <div className="imbBx">
                            <img src={member.image} alt={member.name} />
                        </div>
                        <div className="content">
                            <div className="contentBx">
                                <h3>
                                    {member.name} <br />
                                    <span>{member.role}</span>
                                </h3>
                                <p className="description">{member.description}</p>
                            </div>
                            <ul className="sci">
                                <li style={{ '--i': 1 } as React.CSSProperties}>
                                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                </li>
                                <li style={{ '--i': 2 } as React.CSSProperties}>
                                    <a href="#"><i className="fa-brands fa-github"></i></a>
                                </li>
                                <li style={{ '--i': 3 } as React.CSSProperties}>
                                    <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            <footer className="footer">
                <h4>PathSala E-book </h4>
                <p>"Imparting KNOWLEDGE is the greatest service to mankind.."</p>
            </footer>
        </div>
    );
};

export default TeamSection;
