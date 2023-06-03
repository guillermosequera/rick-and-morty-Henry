import React from "react";
import SearchBar from "../searchBar/SearchBar";
import styled from "./Nav.module.css";

class Nav extends React.Component {
    constructor(props){
        super()
    }

    render() {
        return <nav className={styled.nav}>
            <SearchBar onSearch={this.props.onSearch} />
        </nav>
    }
}

export default Nav;