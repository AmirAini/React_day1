import React from "react";
import "./footer.css";

class Footer extends React.Component {
    render(){
        return(
            <div className="footer-style">
                <div className='top'>
                    <h1>Subscribe Newsletter</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard. Lorem Ipsum has been the industry's standard</p>
                    <input placeholder="enter your email"></input> <button>submit</button>
                </div>

                <div className='bot'>
                    <ul>
                        <li>Besnik</li>
                        <li>Home</li>
                        <li>Contact</li>
                        <li>Support</li>
                    </ul>
                </div>
            </div>
        )
    }
};

export default Footer;