import React from "react";
import {
    MDBBtn,
    MDBCard,
    MDBCheckbox,
    MDBCol,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTabsPane
} from "mdb-react-ui-kit";

export const SignupForm = (props) => {
    return (
        <MDBTabsPane show={props.loginRegisterActive === 'register'}>
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
                <MDBInput className='mb-2 text-white' id='form8Example1' label='Name' />
                </MDBRow>
                <MDBRow className="m-4">
                <MDBInput className='mb-2 text-white' id='form8Example2' label='Username' />
                </MDBRow>
                <MDBRow className="m-4">
                <MDBInput className='mb-2 text-white' type='email' id='form8Example3' label='Email address' />
                </MDBRow>
                <MDBRow className="m-4">
                <MDBInput className='mb-2 text-white' type='password' id='form8Example4' label='Password' />
                </MDBRow>
                <MDBRow className="m-4">
                <MDBInput className='mb-2 text-white' type='password' id='form8Example5' label='Repeat password' />
                </MDBRow>

                <MDBCheckbox
                    wrapperClass='d-flex justify-content-center mb-4'
                    id='form8Example6'
                    label='I have read and agree to the terms'
                    defaultChecked
                />

            <MDBRow className='m-4'>
              <MDBBtn type='submit' className='mb-4' outline color='light' rippleColor='primary' block>
                Sign in
              </MDBBtn>
            </MDBRow>
            </form>
            </MDBCard>
        </MDBTabsPane>
    );
}