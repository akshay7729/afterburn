import React from 'react'
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return(
        <Navbar light expand="md" className="afterBurnNav" fixed={'top'}>
            <NavbarBrand href="/" className="navbarBrandAfterBurn">Afterburn</NavbarBrand>
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
        </Navbar>
    )
}

export default Header