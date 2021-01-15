import React from "react";

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
                            <h4>Eat_Da-Burger:</h4>
                            <h6> <a href="https://github.com/grantf12/Eat-Da-Burger" target="blank">Repo</a>
                            </h6>
                            <h6> <a href="https://infinite-everglades-37369.herokuapp.com/" target="blank">Website</a>
                            </h6>
                        </div>
                            <div className="col-sm-9">
                            <img src="ASSETS/Eat_Burger.jpg" 
                            className="img-fluid mx-auto d-block"
                            alt="Burger"/>
                        </div>
                    </div>
                </div>
                <br/>
                <hr/>
                    <div className="row">
                        <div className="col-sm-3">
                            <h4>Fuel Finder:</h4>
                            <h6> <a href="https://github.com/grantf12/Alternative_Fuel_Finder" target="blank">Repo</a>
                            </h6>
                            <h6> <a href="https://grantf12.github.io/Alternative_Fuel_Finder/" target="blank">Website</a>
                            </h6>
                        </div>
                            <div className="col-sm-9">
                            <img src="ASSETS/Fuel_Finder.gif" 
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
                            <img src="./ASSETS/battle.jpg" 
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
                        <img src="ASSETS/Weather_Dashboard_GIF.gif"
                        className="img-fluid mx-auto d-block"
                        alt="Weather"/>
                    </div>
                </div>
                <br/>
                <hr/>
                <div className="row">
                    <div className="col-sm-3">
                        <h4>Fuel Finder:</h4>
                        <h6> <a href="https://github.com/grantf12/Daily_Planner" target="blank">Repo</a></h6>
                        <h6> <a href="https://grantf12.github.io/Daily_Planner/" target="blank">Website</a>
                        </h6>
                    </div>
                    <div className="col-sm-9">
                        <img src="ASSETS/Daily_Planner_GIF.gif"
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