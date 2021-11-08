import React from "react";
import "./header.css";
import RLogo from "../../logo.svg";

class Header extends React.Component {
    render(){
        return(
            <header className="header-style">
                    <img src= {RLogo} alt="logo" className='img'></img>
                    <nav className="nav-style">
                        
                        <ul className="nav-style">
                            <li className="li"><a href="#home">Home</a></li>
                            <li className="li"><a href="#about">About</a></li>
                            <li className="li"><a href="#contact">Download</a></li>
                            <li className="li"><a href="#work">Get Started</a></li>
                            <li className="li"><a href="#">Login</a></li>
                            <li className="li"><a href="#">Sign Up</a></li>
                        </ul>
                    </nav>
            </header>
        )
    }
};

export default Header;