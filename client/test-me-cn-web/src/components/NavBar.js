import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

function NavBar(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar 
            {...args}
            className="navbar navbar-expand-lg navbar-dark bg-dark"
            >
          <NavbarBrand href="/">
                    <img
                        alt="logo"
                        src="../logo.png"
                        style={{
                            height: 55,
                            width: 150
                        }}
                    />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="#">Guide</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/hema-001/project-test-me-chinese">
                  Project Homepage
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText style={{paddingRight: "5px"}}>Login</NavbarText>
            <NavbarText style={{paddingRight: "5px"}}>|</NavbarText>
            <NavbarText style={{paddingRight: "5px"}}>Register</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
}

export default NavBar;