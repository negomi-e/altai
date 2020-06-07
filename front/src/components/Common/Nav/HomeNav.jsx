import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, Navbar, Container } from 'react-bootstrap'
import Logout from '../../Auth/Logout';
import classes from './Nav.css';
import logoImg from '../../../public/images/altai-logo.svg';


export default function HomeNav() {
  return (
    <Navbar expand="lg">
      <Container>
      <NavLink to="/">
            <img src={logoImg} alt="logo" className="logo-home" />
          </NavLink>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={classes.NavBarWrap + " mr-auto"}>

            <NavLink activeClassName={classes.active} to="/">Домашняя страница</NavLink>

            <NavLink className="nav_link" activeClassName={classes.active} to="/candidates">Сообщество</NavLink>

            <NavLink className="nav_link" activeClassName={classes.active} to="/issues">Инициативы</NavLink>
            <NavLink className="nav_link" activeClassName={classes.active} to={`${localStorage.getItem('id')}`}>Личный кабинет</NavLink>
            <Logout />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

