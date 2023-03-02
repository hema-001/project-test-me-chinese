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
        <MDBRow className='justify-content-center mt-4' style={{marginBottom: "5rem"}}>
            <MDBCol md={8}>
            <MDBTabs pills justify className='mt-4'>
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
                <MDBTabsContent className='mb-8'>
                     <SigninForm loginRegisterActive={loginRegisterActive} />
                     <SignupForm loginRegisterActive={loginRegisterActive} setLoginRegisterActive={setLoginRegisterActive} />
                </MDBTabsContent>
            </MDBCol>
        </MDBRow>
    </div>
  );
}