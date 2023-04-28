import {React, useState } from 'react';
import { Link } from 'react-router-dom';
import { Links } from '../../links/links';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useSignout } from '../../hooks/useSignout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './navbar.module.css';

export default function NavBar() {
    const { user } = useAuthContext();
    const { signout } = useSignout();
    const [ dropdownCls, setDropdownCls ] = useState(styles.dropdown_menu);
    const [ dropdownIcon, setDropdownIcon ] = useState(faBars);
    console.log("Navbar user: ",user);
    const handleLogout = () => {
        signout();
    };
    const handleToggle = () => {
        if(!dropdownCls.includes("open")){
            setDropdownCls(`${styles.dropdown_menu} ${styles.open}`);
            setDropdownIcon(faXmark);
        }else{
            setDropdownCls(styles.dropdown_menu);
            setDropdownIcon(faBars);
        }
    };
  return (
      <>
          <div className='header'>
              <div className={styles.navbar}>
                  <div className={styles.logo}>
                    <Link to={Links.MainPage.path}>
                        <a>
                            <span>Chin</span>/<span>ize</span>
                        </a>
                    </Link>
                </div>
                  <ul className={styles.links}>
                      <li><a href='hero'>Home</a></li>
                      <li><a href='contact'>contact</a></li>
                      <li><a href='About'>About</a></li>
                  </ul>
                  {user ? <a href='#' onClick={handleLogout}>Logout</a> 
                  : 
                    <Link 
                        to={Links.SignInPage.path}>
                            <button 
                                className={styles.action_btn}>
                                    Get Started
                            </button>
                    </Link>}
                  <div className={styles.toggle_btn} onClick={handleToggle}>
                      <FontAwesomeIcon icon={dropdownIcon}/>
                  </div>
              </div>

              <div className={dropdownCls}>
                <li><a href='hero'>Home</a></li>
                <li><a href='contact'>contact</a></li>
                <li><a href='About'>About</a></li>
                {user ? <li><a href='#' onClick={handleLogout}>Logout</a></li> 
                : 
                <li><a href='#' className={styles.action_btn}>Get Started</a></li>}
              </div>
          </div>
      </>
  );
}