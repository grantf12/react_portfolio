import React from "react";
import Battle from "../../images/battle.jpg"
import Burger from "../../images/Burger.jpg"
import Fuel from "../../images/Fuel.gif"
import Planner from "../../images/Planner.gif"
import Weather from "../../images/Weather.gif"
import EmpDir from "../../images/EmpDir.jpg"

function Portfolio() {
    return (
        <div className="card w-75">
        <div className="card-body">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <strong>
                            <h2>Portfolio</h2>
                        </strong>
                        <hr/>

                    </div>
                    <div className="row">
                    <div className="col-sm-3">
                        <h4>Employee Directory (Reactjs):</h4>
                        <h6> <a href="https://github.com/grantf12/Employee_Directory" target="blank">Repo</a></h6>
                        <h6> <a href="https://grantf12.github.io/Employee_Directory/" target="blank">Website</a>
                        </h6>
                    </div>
                    <div className="col-sm-9">
                        <img src={EmpDir}
                        className="img-fluid mx-auto d-block"
                        alt="employee"/>
                    </div>
                </div>
                <div/>
                <br/>
                <hr/>
                <br/>
                    <div className="row">
                        <div className="col-sm-3">
                            <h4>Eat-Da-Burger:</h4>
                            <h6> <a href="https://github.com/grantf12/Eat-Da-Burger" target="blank">Repo</a>
                            </h6>
                            <h6> <a href="https://infinite-everglades-37369.herokuapp.com/" target="blank">Website</a>
                            </h6>
                        </div>
                            <div className="col-sm-9">
                            <img src={Burger} 
                            className="img-fluid mx-auto d-block"
                            alt="Burger"/>
                        </div>
                    </div>
                </div>
                <br/>
                <hr/>
                <br/>
                    <div className="row">
                        <div className="col-sm-3">
                            <h4>Fuel Finder:</h4>
                            <h6> <a href="https://github.com/grantf12/Alternative_Fuel_Finder" target="blank">Repo</a>
                            </h6>
                            <h6> <a href="https://grantf12.github.io/Alternative_Fuel_Finder/" target="blank">Website</a>
                            </h6>
                        </div>
                            <div className="col-sm-9">
                            <img src={Fuel} 
                            className="img-fluid mx-auto d-block"
                            alt="Feul Finder"/>
                        </div>
                    </div>
                <br/>
                <hr/>
                <br/>
                <hr/>
                    <div className="row">
                        <div className="col-sm-3">
                            <h4>Battle-RPG (in progress):</h4>
                            <h6> <a href="https://github.com/grantf12/Battle_Game_RPG" target="blank">Repo</a>
                            </h6>
                            <h6> <a href="https://serene-dawn-63330.herokuapp.com/" target="blank">Website</a> (Might be down)
                            </h6>
                        </div>
                            <div className="col-sm-9">
                            <img src={Battle} 
                            className="img-fluid mx-auto d-block"
                            alt="battle"/>
                        </div>
                    </div>
                <br/>
                <hr/>
                <div className="row">
                    <div className="col-sm-3">
                        <h4>Weather Dashboard:</h4>
                        <h6> <a href="https://github.com/grantf12/Weather_Dashboard" target="blank">Repo</a></h6>
                        <h6> <a href="https://grantf12.github.io/Weather_Dashboard/" target="blank">Website</a>
                        </h6>
                    </div>
                    <div className="col-sm-9">
                        <img src={Weather}
                        className="img-fluid mx-auto d-block"
                        alt="Weather"/>
                    </div>
                </div>
                <br/>
                <hr/>
                <div className="row">
                    <div className="col-sm-3">
                        <h4>Daily Planner:</h4>
                        <h6> <a href="https://github.com/grantf12/Daily_Planner" target="blank">Repo</a></h6>
                        <h6> <a href="https://grantf12.github.io/Daily_Planner/" target="blank">Website</a>
                        </h6>
                    </div>
                    <div className="col-sm-9">
                        <img src={Planner}
                        className="img-fluid mx-auto d-block"
                        alt="Daily Planner"/>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
};

export default Portfolio;