import {Component} from "react";
import './footerStyle.css'
import CursorLogo from "../../images/cursor_logo.png"
import {NavLink} from "react-router-dom";


export default class Footer extends Component {
    render() {
        return (<footer>
            <div className="row p-4">
                <div className="col-md-4 col-sm-6 col-xs-12">
                    <img src={CursorLogo} className="logo" alt='logo'/>
                </div>

                <div className="col-md-4 col-sm-6 col-xs-12">
                    <ul className="menu">
                        <span>Menu</span>
                        <li>
                            <a href='#'>Home</a>
                        </li>

                        <li>
                            <NavLink to='/posts'>Posts</NavLink>
                        </li>

                        <li>
                            <NavLink to='/contacts'>Contacts</NavLink>
                        </li>

                        <li>
                            <NavLink to='/photos'>Photos</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="col-md-4 col-sm-6 col-xs-12">
                    <ul className="address">
                        <span>Contact</span>
                        <li>
                            <i className="bi bi-telephone-fill text-danger" aria-hidden="true"/>
                            <a href="#"> Phone</a>
                        </li>
                        <li>
                            <i className="bi bi-geo-alt-fill text-danger" aria-hidden="true"/>
                            <a href="#"> Adress</a>
                        </li>
                        <li>
                            <i className="bi bi-envelope-fill text-danger" aria-hidden="true"/>
                            <a href="#"> Email</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>)
    }
}
