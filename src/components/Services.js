import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faChartArea, faDesktop, faDatabase } from "@fortawesome/free-solid-svg-icons";
const Services = () => {
    return (
        <div className="services">
            <h1 className="py-5">My Services</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={ faChartBar } size="2x" />
                                </div>
                                <h3>Data Analysis</h3>
                                <p>Will fill in more info later</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={ faChartArea } size="2x" />
                                </div>
                                <h3>Data Visualization</h3>
                                <p>Will fill in more info later</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={ faDesktop } size="2x" />
                                </div>
                                <h3>Data</h3>
                                <p>Will fill in more info later</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={ faDatabase } size="2x" />
                                </div>
                                <h3>Database</h3>
                                <p>Will fill in more info later</p>
                            </div>
                        </div>
                    </div>
                </div>           
        </div>
    )
}

export default Services;
