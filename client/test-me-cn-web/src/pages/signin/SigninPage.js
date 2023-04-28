import React from 'react';
import styles from './SigninPage.module.css';
import { Formik } from 'formik';
import { emailRegex } from '../../constants/constants';
import { useSignin } from "../../hooks/useSignin";
import { Links } from '../../links/links';

export default function SigninPage() {
  const { signin, error } = useSignin();

  const handleSubmit = async (values) => {
    const user = {
      email: values.email || undefined,
      password: values.password || undefined,
    };
    await signin(user);
  };
  return (
    <div className={styles.container}>
   <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
      }else if (!emailRegex.test(values.email)) {
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
            <div className={styles.forground}>
            <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.form_title}>
              Sign in
            </div>
            <div className={styles.form_subtitle}>
              Sign in to your account
            </div>
            <div className={styles.input_group}>
              <div className={styles.input_label}>
                E-mail
              </div>
              <input 
                className={styles.input} 
                type='email'
                name='email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur} 
                />
                {errors.email && touched.email && (
                  <div className={styles.error}>{errors.email}</div>
                )}
            </div>
            <div className={styles.input_group}>
              <div className={styles.input_label}>
                Password
              </div>
              <input 
                className={styles.input} 
                type='password'
                name='password'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur} 
                />
                {errors.password && touched.password && (
                  <div className={styles.error}>{errors.password}</div>
                )}
            </div>
            <button 
              className={styles.action_btn} 
              type='submit'
              disabled={isSubmitting}
              >
              Sign in
            </button>
            <div className={styles.form_footer}>
              <div className={styles.form_footer_text}>
                Don't have an account?
              </div>
              <a className={styles.form_footer_link} href={Links.SignUpPage.path}>
                Sign up
              </a>
            </div>
          </form>
          {error && (
            <div className={styles.error}>{error.error}</div>
          )}
          </div>
          )} 
   </Formik>
    </div>
  );
}