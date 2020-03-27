import React, { Component } from "react";
import "./home.css"






class Home extends Component {

    state = {
        tab:"info"
    }

    renderTab() {
        return (
            <div>
                TEST
            </div>
        );
    }

    render() {
        return (
            <div className="wrapper">
                <div className="row">
                    <div className=" tab col-md-12">
                        <button className="tablinks" value="About">About</button>
                        <button className="tablinks" value="Portfolio">Portfolio</button>
                        <button className="tablinks" value="Contact">Contact Me</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        {this.renderTab()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;