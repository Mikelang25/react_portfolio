import React, { Component } from "react";
import "./home.css"
import Info from "../info"
import Portfolio from "../portfolio"
import Contact from "../contact"


class Home extends Component {

    state = {
        tab: "info"
    }

    selectedTab = empPage => {
        const desiredTab = empPage.target.value
        this.setState({
            tab: desiredTab
        });
    }

    renderTab() {

        if (this.state.tab === "info") {
            return (
                <div className="row">
                    <Info/>
                </div>
            );
        } else if (this.state.tab === "portfolio") {
            return (
                <div>
                    <Portfolio/>
                </div>
            );
        } else if (this.state.tab === "contact") {
            return (
                <div>
                    <Contact/>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="wrapper">
                <div className="row">
                    <div className="col-md-2">
                        <button value="info" className="nav nav-top" onClick={this.selectedTab}>Info</button>
                        <button value="portfolio" className="nav" onClick={this.selectedTab}>Portfolio</button>
                        <button value="contact" className="nav nav-bottom" onClick={this.selectedTab}>Contact Me</button><br></br>
                        <a className="linkedin" href="https://www.linkedin.com/in/mikelang25/"><img className="img-linkedin"src="https://img.icons8.com/cute-clipart/32/000000/linkedin.png"/>LinkedIn</a>
                    </div>
                    <div className="col-md-10">
                        {this.renderTab()}
                    </div>
                </div>
                <footer className="footer">
                <a href="https://icons8.com/icon/118979/linkedin">Icons by Icons8</a>
                </footer>
            </div>
        );
    }
}

export default Home;