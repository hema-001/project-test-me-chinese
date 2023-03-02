import { React } from "react";
import {
    MDBBtn,
    MDBCard,
    MDBCheckbox,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTabsPane,
    MDBTypography,
} from "mdb-react-ui-kit";
import { useSignup } from "../../hooks/useSignup";
import {
    strongRegex,
    mediumRegex,
    emailRegex
} from "../../constants/constants";
import { Formik } from "formik";

export const SignupForm = (props) => {
    const { signup, error } = useSignup();

    const handleSubmit = async (values) => {
        const user = {
            name: values.name || undefined,
            username: values.username || undefined,
            email: values.email || undefined,
            password: values.password || undefined,
        };
        console.log(user);
        await signup(user);
    };
    return (
        <MDBTabsPane show={props.loginRegisterActive === 'register'}>
            <MDBCard background="dark" className="text-white">
                <Formik
                    initialValues={{
                        name: '',
                        username: '',
                        email: '',
                        password: '',
                        confirmPassword: '',
                        readTos: false
                    }}
                    validate={values => {
                        const errors = {};
                        if (!values.name) {
                            errors.name = 'Required';
                        } else if (values.name.length > 15) {
                            errors.name = 'Must be 15 characters or less';
                        }
                        if (!values.username) {
                            errors.username = 'Required';
                        } else if (values.username.length < 5) {
                            errors.username = 'Must be 5 characters or more';
                        }
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (!emailRegex.test(values.email)) {
                            errors.email = 'Invalid email address';
                        }
                        if (!values.password) {
                            errors.password = 'Required';
                        } else if (!strongRegex.test(values.password) && !mediumRegex.test(values.password)) {
                            errors.password = 'Password must be at least 8 characters, contain at least one number, one lowercase and one uppercase letter';
                        }
                        if (!values.confirmPassword) {
                            errors.confirmPassword = 'Required';
                        } else if (values.confirmPassword !== values.password) {
                            errors.confirmPassword = 'Passwords do not match';
                        }
                        if (!values.readTos) {
                            errors.readTos = 'You must agree to the Terms of Service';
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
                        /* and other goodies */
                    }) => (
                        <form onSubmit={handleSubmit}>
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
                                <MDBInput
                                    className='mb-2 text-white'
                                    label='Name'
                                    name="name"
                                    value={values.name}
                                    labelClass="text-white"
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                                {errors.name && touched.name && (
                                    <MDBTypography tag='small' style={{ color: "red" }}>
                                        <MDBIcon icon="exclamation-circle" color="danger" />&nbsp;
                                        {errors.name}
                                    </MDBTypography>
                                )}
                            </MDBRow>
                            <MDBRow className="m-4">
                                <MDBInput
                                    className='mb-2 text-white'
                                    label='Username'
                                    labelClass="text-white"
                                    name="username"
                                    value={values.username}
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                                {errors.username && touched.username && (
                                    <MDBTypography tag='small' style={{ color: "red" }}>
                                        <MDBIcon icon="exclamation-circle" color="danger" />&nbsp;
                                        {errors.username}
                                    </MDBTypography>
                                )}
                            </MDBRow>
                            <MDBRow className="m-4">
                                <MDBInput
                                    className='mb-2 text-white'
                                    type='email'
                                    label='Email address'
                                    labelClass="text-white"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                                {errors.email && touched.email && (
                                    <MDBTypography tag='strong' style={{ color: "red" }}>
                                        <MDBIcon icon="exclamation-circle" color="danger" />&nbsp;
                                        {errors.email}
                                    </MDBTypography>
                                )}
                            </MDBRow>
                            <MDBRow className="m-4">
                                <MDBInput
                                    className='mb-2 text-white'
                                    type='password'
                                    label='Password'
                                    labelClass="text-white"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                                {errors.password && touched.password && (
                                    <MDBTypography tag='strong' style={{ color: "red" }}>
                                        <MDBIcon icon="exclamation-circle" color="danger" />&nbsp;
                                        {errors.password}
                                    </MDBTypography>
                                )}
                            </MDBRow>
                            <MDBRow className="m-4">
                                <MDBInput
                                    className='mb-2 text-white'
                                    type='password'
                                    label='Repeat password'
                                    labelClass="text-white"
                                    name="confirmPassword"
                                    value={values.confirmPassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                                {errors.confirmPassword && touched.confirmPassword && (
                                    <MDBTypography tag='strong' style={{ color: "red" }}>
                                        <MDBIcon icon="exclamation-circle" color="danger" />&nbsp;
                                        {errors.confirmPassword}
                                    </MDBTypography>
                                )}
                            </MDBRow>
                            <MDBRow className="justify-content-center">
                                <MDBCheckbox
                                    wrapperClass='d-flex justify-content-center mt-4'
                                    label='I have read and agree to the terms'
                                    name="readTos"
                                    value={values.readTos}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.readTos && touched.readTos && (
                                    <MDBTypography tag='strong' style={{ color: "red", textAlign: "center" }}>
                                        <MDBIcon icon="exclamation-circle" color="danger" />&nbsp;
                                        {errors.readTos}
                                    </MDBTypography>
                                )}
                            </MDBRow>

                            <MDBRow className='m-4'>
                                <MDBBtn
                                    type='submit'
                                    className='mb-4'
                                    outline
                                    color='light'
                                    rippleColor='primary'
                                    block
                                    disabled={isSubmitting}>
                                    Sign Up
                                </MDBBtn>
                            </MDBRow>
                        </form>
                    )}
                </Formik>
                {error && (
                    <MDBTypography
                        className="text-black m-4"
                        note
                        noteColor='danger'
                        noteTitle='Error'>
                        {error.error}
                    </MDBTypography>
                )}
            </MDBCard>
        </MDBTabsPane>
    );
}