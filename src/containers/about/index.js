import React from "react";
import "./about.css";

class About extends React.Component {
    render(){
        return(
            <div id="about" className="about-style">
                
                {/* Top */}
                <div className="top">
                    <h1>How It Works</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                </div> 
                
                {/* Bot */}
                <div className="bot">
                    
                    <div className="both">
                    <div className="botpic"></div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                    </div>

                    <div className="both">
                    <div className="botpic"></div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                    </div>

                    <div className="both">
                    <div className="botpic"></div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                    </div>
                    
                </div>


            </div>
        )
    }
};

export default About;