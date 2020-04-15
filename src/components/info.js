import React from "react";
import "./info.css"

function Info() {

    return (
        <div className="col-md-12">
            <div className="row">
                <div className="picture-container col-md-3">
                    <img className="profile" src="/profile.jpg" />
                    <span>Name: Mike Lang</span><br></br>
                    <span>Location: Danbury, CT </span><br></br>
                    <span>Email: Michaellang2525@yahoo.com</span>
                </div>
                <div className="about-container col-md-5">
                    <h2>About Me</h2>
                    <p>
                        My name is Michael Lang and I currently reside in Danbury, CT with my wife and two dogs. I have a Bachelors degree in Finance from
                        Quinnipiac University, and my Masters in Information Systems from Marist College with a dual concentration in Systems Management and Data Analytics.
                        While studying at Quinnipiac University, I played two years on the men’s baseball team. In my spare time I enjoy golfing, watching movies, and playing with my dog.
                        My most recent professional experience is at Rockit Solutions where I manage a daily data load process where bank data is normalized and loaded into Rockit’s proprietary system.
                        I also spend a large amount of time creating automation solutions through the use of: Microsoft Access, SQL, PowerShell, and Batch that support mine and other departments as well as
                        clients.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Info;