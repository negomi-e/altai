import React from 'react'
import { NavLink} from 'react-router-dom';
import classes from './Nav.css';
import { Nav, Navbar, Container } from 'react-bootstrap'
import logoImg from '../../../public/images/altai-logo.svg';

export default function AuthNav() {
    return (
        <Navbar expand="lg">
            <Container>
            <NavLink to="/">
            <img src={logoImg} 
            alt="logo" 
            className="logo-auth" />
          </NavLink>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className={classes.NavBarWrap + " mr-auto"}>

                    <NavLink activeClassName={classes.active} to="/">Алтай</NavLink>

                    <NavLink className="nav_link" activeClassName={classes.active} to="/login">Авторизация</NavLink>

                    <NavLink className="nav_link" activeClassName={classes.active} to="/register">Регистрация</NavLink>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
