import React from "react";
import "./home.css";
import RPic from "../../../src/assets/pic1.jpg";

class Home extends React.Component {
    render(){
        return(
            <div className="home-style" id='home'>

                {/* left */}
                <div className="left-div">
                <h3>#30 Days free trail</h3>
                <h1 style={ styles.titleText }>Life Should Be Easy</h1>
                <h3>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry. </h3>
                <button className="button">Get Started</button>
                </div>

                {/* right */}
                <div className="right-div">
                </div>
                
            </div>
        )
    }
};

const styles = {
    titleText: {
        fontSize: 40, 
        fontWeight: 'bold',
        letterSpacing: '10px',
    },
}

export default Home;