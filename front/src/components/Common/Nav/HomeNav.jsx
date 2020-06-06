import React, { Component } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import { Nav, Navbar, Container } from 'react-bootstrap'
import Logout from '../../auth/Logout'
import classes from './Nav.css';


export default function HomeNav() {
    return (
        <Navbar expand="lg">
            <Container>
            <NavLink to="/">
                <img alt="logo" className="logo" />
            </NavLink>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className={classes.NavBarWrap + " mr-auto"}>

                    <NavLink activeClassName={classes.active} to="/">Алтай</NavLink>

                    <NavLink className="nav_link" activeClassName={classes.active} to="/candidates">Candidates</NavLink>

                    <NavLink className="nav_link" activeClassName={classes.active} to="/issues">Initiatives</NavLink>

                    <Logout />
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

