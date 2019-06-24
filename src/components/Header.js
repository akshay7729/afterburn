import React, {Component} from 'react'
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

class Header extends Component{

    constructor(props){
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
          collapsed: !this.state.collapsed
        });
    }

    render(){
        return(
            <Navbar light expand="md" className="afterBurnNav">
                <Link to="/">
                    <NavbarBrand href="/" className="navbarBrandAfterBurn">Afterburn</NavbarBrand>
                </Link>
                <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                <Collapse isOpen={!this.state.collapsed} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink><FontAwesomeIcon icon={faSearch} /></NavLink>
                        </NavItem>
                        <NavItem>
                            <Link to="/" className="nav-link">shop</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/about" className="nav-link">about</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/contact" className="nav-link">contact</Link>
                        </NavItem>
                        <NavItem>
                            <NavLink><FontAwesomeIcon icon={faUser} /></NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}

export default Header