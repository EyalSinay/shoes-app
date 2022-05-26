import "./Main.style.css"
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Header from "./Header";
import Shoes from "./Shoes";

class Main extends React.Component {


    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/" exact component={HomePage} />
                    <Route path="/shoes" component={Shoes} />
                </div>
            </BrowserRouter>
        );
    }
}

export default Main;