import React from "react";
import { 
    MDBBtn, 
    MDBCard, 
    MDBCheckbox, 
    MDBCol, 
    MDBIcon, 
    MDBInput, 
    MDBRow, 
    MDBTabsPane } from "mdb-react-ui-kit";

export const SigninForm = (props) => {
    return(
        <MDBTabsPane show={props.loginRegisterActive === 'login'}>
        <MDBCard background="dark" className="text-white">
          <form>
            <div className='text-center mb-3'>
              <p>Sign up with:</p>

              <MDBBtn outline color="light" floating className='mx-1'>
                <MDBIcon fab icon='facebook-f' />
              </MDBBtn>

              <MDBBtn outline color="light" floating className='mx-1'>
                <MDBIcon fab icon='google' />
              </MDBBtn>

              <MDBBtn outline color="light" floating className='mx-1'>
                <MDBIcon fab icon='twitter' />
              </MDBBtn>

              <MDBBtn outline color="light" floating className='mx-1'>
                <MDBIcon fab icon='github' />
              </MDBBtn>
            </div>

            <p className='text-center'>or:</p>
            <MDBRow className="m-4">
            <MDBInput className='mb-2 text-white' type='email' id='form7Example1' label='Email address' />
            </MDBRow>
            <MDBRow className="m-4">
            <MDBInput className='mb-2 text-white' type='password' id='form7Example2' label='Password' />
            </MDBRow>

            <MDBRow className='mb-4'>
              <MDBCol className='d-flex justify-content-center mx-1'>
                <MDBCheckbox id='form7Example3' label='Remember me' defaultChecked />
              </MDBCol>
              <MDBCol>
                <a href='#!'>Forgot password?</a>
              </MDBCol>
            </MDBRow>

            <MDBRow className='m-4'>
              <MDBBtn type='submit' className='mb-4' outline color='light' rippleColor='primary' block>
                Sign in
              </MDBBtn>
            </MDBRow>

            <div className='text-center'>
              <p>
                Not a member? <a href='#!'>Register</a>
              </p>
            </div>
          </form>
          </MDBCard>
        </MDBTabsPane>
    );
}