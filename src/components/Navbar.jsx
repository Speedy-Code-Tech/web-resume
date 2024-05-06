import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
    const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

    return (
        <>
            <nav className="navbar navko">
                <a className="navbar-brand" href="#home" style={{ color: props.themes.subText }}>SPEEDY CODE TECH</a>

                <div className="navbar-toggle fair" onClick={toggleNavbar}>
                    <i className={`text-white fs-1 bi  ${isOpen ? 'bi-x' : 'bi-bar-chart-steps'}`}></i>
                </div>
                <div className="container-fluid p-0 m-0 exe">
                    <ul className={`navbar-nav ' ${isOpen ? 'active' : 'myNav'}`} style={{ color: props.themes.text }}>
                        <li className="nav-item">
                            <a className="nav-link" href="#home" style={{ color: props.themes.text }}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about" style={{ color: props.themes.text }}>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#project" style={{ color: props.themes.text }}>Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact" style={{ color: props.themes.text }}>Contacts</a>
                        </li>
                    </ul>

                </div>
                

                
            </nav>

        </>
    )
}

export default Navbar