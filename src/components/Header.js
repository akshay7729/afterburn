import React, {Component} from 'react'
import {Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

class Header extends Component{

    constructor(props){
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
            collapsed: true,
            modal: false
        };
    }

    toggleNavbar() {
        this.setState({
          collapsed: !this.state.collapsed
        });
    }

    toggleModal() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render(){
        return(
            <React.Fragment>
                <Navbar light expand="md" className="afterBurnNav">
                    <Link to="/" className="navbarBrandAfterBurn navbar-brand">Afterburn</Link>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink><FontAwesomeIcon icon={faSearch} /></NavLink>
                            </NavItem>
                            <NavItem>
                                <Link to="/productsList" className="nav-link">shop</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/about" className="nav-link">about</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/contact" className="nav-link">contact</Link>
                            </NavItem>
                            <NavItem>
                                <span className="nav-link" onClick={this.toggleModal}>
                                    <FontAwesomeIcon icon={faUser} />
                                </span>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                {/* User Modal */}
                <Modal centered isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
                    <ModalHeader toggle={this.toggleModal}>Modal title</ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}

export default Header