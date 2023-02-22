import React from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';
import { SigninForm } from './components/SigninForm';
import { SignupForm } from './components/SignupForm';

export default function SigninPage() {
    const [loginRegisterActive, setLoginRegisterActive] = React.useState('login');

    const handleLoginRegisterClick = (tab) => {
        setLoginRegisterActive(tab);
    };
  return (
    <div>
        <MDBRow className='justify-content-center' style={{marginBottom: "5rem"}}>
            <MDBCol md={8}>
            <MDBTabs pills justify className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink 
            color='dark'
            className='text-white'
            onClick={() => handleLoginRegisterClick('login')}
            active={loginRegisterActive === 'login'}
          >
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            color='dark'
            className='text-white'
            onClick={() => handleLoginRegisterClick('register')}
            active={loginRegisterActive === 'register'}
          >
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>
                <MDBTabsContent>
                     <SigninForm loginRegisterActive={loginRegisterActive} />
                     <SignupForm loginRegisterActive={loginRegisterActive} />
                </MDBTabsContent>
            </MDBCol>
        </MDBRow>
    </div>
  );
}