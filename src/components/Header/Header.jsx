import React from "react";
import { Component } from "react";
import CursorLogo from "../../images/cursor_logo.png"
import './headerStyle.css'
import {NavLink} from "react-router-dom";


export default class Header extends Component {
    render() {
        return (
            <header>
            <div className="header">
                <NavLink to="/"><img src={CursorLogo} alt="logo" className='logo' /></NavLink>
                <ul className="nav">
                    <li className='nav-link'><NavLink to="/">Home</NavLink></li>
                    <li className='nav-link'><NavLink to="/posts">Posts</NavLink></li>
                    <li className='nav-link'><NavLink to="/photos">Photos</NavLink></li>
                    <li className='nav-link'><NavLink to="/contacts">Contacts</NavLink></li>
                </ul>
            </div >
            </header>
        )
    }
}
