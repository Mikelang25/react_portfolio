import React from "react";
import "./portfolio.css"

function Portfolio() {

    return (
        <div className="col-md-10 projects-container text-center">
            <div className="project"><h2 className="proj-head">Employee Management</h2></div>
            <div className="project"><h2 className="proj-head">Premier League Zone</h2></div>
            <div className="project"><h2 className="proj-head">My Calendar</h2></div>
            <div className="project"><h2 className="proj-head">Project 4</h2></div>
            <div className="project"><h2 className="proj-head">Project 5</h2></div>
            <div className="project"><h2 className="proj-head">Project 6</h2></div>
        </div>
    );
}

export default Portfolio;