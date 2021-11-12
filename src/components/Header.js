import React from "react";
import Typewriter from 'typewriter-effect';
const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Data Analyst and Business Analyst</h1>
                    <div className="typed-text">                       
                        <Typewriter
                            options={{
                                strings: ["Data Analysis", "Data Visualization", "Numpy", "Pandas", "Python", "SQL"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                    <a href="#" className="btn-main-offer">Contact Me</a>
            </div> 
        </div>
    )
}

export default Header;
