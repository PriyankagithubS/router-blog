import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import './NavBar.css'; 

const NavBar = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark" className="d-flex justify-content-between ">
            <div className="container d-flex justify-content-between ">
                <Navbar.Brand as={NavLink} to="/">
                    <img
                        alt=""
                        src="/router.png"
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                    />{' '}
                    Courses
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto d-flex ">
                        <Nav.Link as={NavLink} to="/fullstack" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }>Full Stack Development</Nav.Link>
                        <Nav.Link as={NavLink} to="/data science" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }>Data Science</Nav.Link>
                        <Nav.Link as={NavLink} to="/cyber security" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }>Cyber Security</Nav.Link>
                        <Nav.Link as={NavLink} to="/artificial intelligence" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }>Artificial Intelligence</Nav.Link>
                        <Nav.Link as={NavLink} to="/devOps" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }>DevOps</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default NavBar;
