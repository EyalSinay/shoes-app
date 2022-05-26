import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {


    render() {
        return (
            <nav>
                <NavLink to="/">Home Page</NavLink>
                <NavLink to="/shoes">All Shoes</NavLink>
            </nav>
        );
    }
}

export default Header;