import React from 'react';
import './css/nav.css';
import { NavLink } from 'react-router-dom';
const Nav = () => {

    return (

        <div className="nav">

            <div className="links1">
                <ul>

                    <li > <NavLink to="/" activeClassName="active" exact >خانه</NavLink></li>

                    <li><NavLink to="/about us" activeClassName="active" >درباره ما</NavLink></li>

                    <li><NavLink to="/contact" activeClassName="active">تماس با ما</NavLink></li>

                </ul>
            </div>
            <div className="logo">
                <h4>coffee shop</h4>
            </div>
            <div className="links2">
                <ul>
                    <li><a href="#" className="coffees ">قهوه ها</a></li>
                    <li><a href="#" className="teas">چای ها</a></li>
                    <li><a href="#" className="cakes">کیک ها</a></li>

                </ul>
            </div>


        </div>

    );
}
export default Nav;
