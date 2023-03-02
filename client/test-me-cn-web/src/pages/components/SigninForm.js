import { React } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCheckbox,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTabsPane,
  MDBTypography
} from "mdb-react-ui-kit";
import { useSignin } from "../../hooks/useSignin";
import { emailRegex } from "../../constants/constants";
import { Formik } from "formik";

export const SigninForm = (props) => {
  const { signin, error } = useSignin();

  const handleSubmit = async (values) => {
    const user = {
      email: values.email || undefined,
      password: values.password || undefined,
    };
    await signin(user);
  };
  return (
    <MDBTabsPane show={props.loginRegisterActive === 'login'}>
      <MDBCard background="dark" className="text-white">
        <Formik
          initialValues={{
            email: '',
            password: '',
            rememberMe: false
          }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (!emailRegex.test(values.email)) {
              errors.email = 'Invalid email address';
            }
            if (!values.password) {
              errors.password = 'Required';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              handleSubmit(values);
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className='text-center mb-3'>
                <p>Sign in with:</p>

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
                <MDBInput
                  className='mb-2 text-white'
                  type='email'
                  name="email"
                  label='Email address'
                  labelClass="text-white"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur} />
                {errors.email && touched.email && (
                  <MDBTypography style={{ color: "red" }}>
                    <MDBIcon icon="exclamation-circle" color="danger" />&nbsp;
                    {errors.email}
                  </MDBTypography>
                )}
              </MDBRow>
              <MDBRow className="m-4">
                <MDBInput
                  className='mb-2 text-white'
                  type='password'
                  name="password"
                  label='Password'
                  labelClass="text-white"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password && (
                  <MDBTypography style={{ color: "red" }}>
                    <MDBIcon icon="exclamation-circle" color="danger" />&nbsp;
                    {errors.password}
                  </MDBTypography>
                )}
              </MDBRow>
              <MDBRow className='mb-4'>
                <MDBCol className='d-flex justify-content-center mx-1'>
                  <a href='#!'>Forgot password?</a>
                </MDBCol>
              </MDBRow>

              <MDBRow className='m-4'>
                <MDBBtn
                  type='submit'
                  className='mb-4'
                  outline color='light'
                  rippleColor='primary'
                  block
                  disabled={isSubmitting}>
                  Sign in
                </MDBBtn>
              </MDBRow>

              <div className='text-center'>
                <p>
                  Not a member? <a href='#!'>Register</a>
                </p>
              </div>
            </form>
          )}
        </Formik>
        {error && (<MDBTypography note noteColor="danger" className="m-4 text-dark"> {error.error} </MDBTypography>)}
      </MDBCard>
    </MDBTabsPane>
  );
}