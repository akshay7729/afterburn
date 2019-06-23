import React, {Component} from 'react'
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons'

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
                <NavbarBrand href="/" className="navbarBrandAfterBurn">Afterburn</NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                <Collapse isOpen={!this.state.collapsed} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/"><FontAwesomeIcon icon={faSearch} /></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/">Latest</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/">Contact</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/"><FontAwesomeIcon icon={faUser} /></NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}

export default Header