import React from "react";
import "./info.css"

function Info() {

    return (
        <div className="col-md-12">
            <div className="row">
                <div className="picture-container col-md-3">
                    <img className="profile" src="/profile.jpg"/>
                </div>
                <div className="about-container col-md-5">
                    <p>This is where the about me paragraph will go.</p>
                </div>
            </div>
        </div>
    );
}

export default Info;