import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import NavLink from "../navLink/NavLink";
import styled from "./Nav.module.css";

class Nav extends React.Component {
    constructor(props){
        super()
    }

    render() {
        return <nav className={styled.nav}>
            <NavLink to={'/home'}><button>Home</button></NavLink>
            <NavLink to={'/favorites'}><span>Favorites</span></NavLink>
            <NavLink to={'/about'}><span>About</span></NavLink>
            <SearchBar onSearch={this.props.onSearch} />
        </nav>
    }
}

export default Nav;