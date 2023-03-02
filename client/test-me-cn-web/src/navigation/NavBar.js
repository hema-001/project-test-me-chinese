import {React, useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { Links } from '../links/links';
import { useAuthContext } from '../hooks/useAuthContext';
import { useSignout } from '../hooks/useSignout';

export default function NavBar() {
    const [showNavRight, setShowNavRight] = useState(false);
    const { user } = useAuthContext();
    const { signout } = useSignout();

    const handleLogout = () => {
        signout();
    };
  return (
      <>
          <MDBNavbar expand='lg' dark bgColor='dark' className='shadow-5'>
              <MDBContainer fluid>
                  <MDBNavbarBrand>
                      <Link to={Links.MainPage.path}>
                          <img
                              src='../logo.png'
                              height='40'
                              alt=''
                              loading='lazy'
                          />
                      </Link>
                  </MDBNavbarBrand>

                  <MDBNavbarToggler
                      aria-controls='navbarSupportedContent'
                      aria-expanded='false'
                      aria-label='Toggle navigation'
                      onClick={() => setShowNavRight(!showNavRight)}
                  >
                      <MDBIcon icon='bars' fas />
                  </MDBNavbarToggler>

                  <MDBCollapse navbar show={showNavRight}>
                      <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                          <MDBNavbarItem>
                              <MDBNavbarLink active aria-current='page' href='#'>
                                  Guide
                              </MDBNavbarLink>
                          </MDBNavbarItem>
                          <MDBNavbarItem>
                              <MDBNavbarLink href='https://github.com/hema-001/project-test-me-chinese'>Homepage</MDBNavbarLink>
                          </MDBNavbarItem>

                          <MDBNavbarItem>
                              <MDBDropdown>
                                  <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                                      Dropdown
                                  </MDBDropdownToggle>
                                  <MDBDropdownMenu>
                                      <MDBDropdownItem link>Action</MDBDropdownItem>
                                      <MDBDropdownItem link>Another action</MDBDropdownItem>
                                      <MDBDropdownItem link>Something else here</MDBDropdownItem>
                                  </MDBDropdownMenu>
                              </MDBDropdown>
                          </MDBNavbarItem>
                      </MDBNavbarNav>
                      {user === null ? (<div className='navbar-text'>
                          <Link to={Links.SignInPage.path} style={{ paddingRight: "20px" }}>
                              <MDBBtn outline color='light' rippleColor='primary' size='sm'>
                                  Sign In
                              </MDBBtn>
                          </Link></div>) : (<div className='navbar-text' style={{width: "100px"}}>
                              <MDBBtn outline color='light' rippleColor='primary' size='sm'
                              onClick={handleLogout}>
                                  Sign Out
                              </MDBBtn></div>)}
                  </MDBCollapse>
              </MDBContainer>
          </MDBNavbar>
      </>
  );
}