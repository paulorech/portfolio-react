import React, { Component } from "react";
import Header from './Header';
import Projects from './Projects';
import Sidebar from './Sidebar';
import "../css/foundation.css";
import "../css/style.css";

class Home extends Component {


    render() {
        return (
            <div>
                <Sidebar/>
                <div className="off-canvas-content" data-off-canvas-content>
                    <div className="title-bar hide-for-large">
                        <div className="title-bar-left">
                            <button
                                className="menu-icon"
                                type="button"
                                data-toggle="my-info"
                            ></button>
                            <span className="title-bar-title">Paulo Gustavo Rech</span>
                        </div>
                    </div>
                    <Header />
                    <article className="grid-container portfolio-index">
                        <div className="grid-x grid-margin-x small-up-2 medium-up-2 large-up-3">
                            <Projects />
                        </div>
                    </article>
                </div>
            </div>
        );
    }
}


export default Home;