import React, { Component } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom';
import classes from './Nav.css';
import { Nav, Navbar, Container } from 'react-bootstrap'

export default function AuthNav() {
    return (
        <Navbar expand="lg">
            <Container>
            <NavLink to="/">
                <img alt="logo" className="logo" />
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
