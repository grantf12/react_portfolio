import React from "react";
import Me from "../../images/Profile_pic.jpg"

function AboutMe() {

    return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="card w-75">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-12">
                  <strong>
                    <h1>About Me</h1>
                  </strong>
                  <hr />
                  <img
                    src={Me}
                    width="auto"
                    height="250px"
                    align="left"
                    hspace="10"
                    vspace="5"
                    alt="Me"
                  />
                  <p style={{ "font-size" : "20px" }}>
                    My name is Grant Ferment. I was raised in Charlotte, North
                    Carolina and graduated from UNC Charlotte. I graduated with
                    a bachelor's degree in Exercise Science with a Minor in
                    Public Health. I enjoy video games and disc golfing with
                    friends. After I got my degree I was unhappy with
                    working in this field and sought out new job opportunities
                    when I came across web development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</div>
)

};

export default AboutMe;