import React from "react";
import "./contact.css";
import AppLogo from "../../assets/pic4.png"
import PlayLogo from "../../assets/pic5.png"

class Contact extends React.Component {
    render(){
        return(
            <div id="contact" className="main">
                <div className="left">
                    <div className='picLeft'>

                    </div>
                </div>
                
                <div className="right">
                    <h1>Download</h1>
                    <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    </p>
                    <button> <img src= {AppLogo} alt="logo" className='img'></img>App Store</button>
                    <button><img src= {PlayLogo} alt="logo" className='img'></img> Play Store</button>
                </div>
            </div>
        )
    }
};

export default Contact;