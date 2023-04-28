import React from 'react';
import styles from './SignupPage.module.css';
import { Formik } from 'formik';
import { emailRegex, mediumRegex, strongRegex } from '../../constants/constants';
import { Links } from '../../links/links';
import { useSignup } from '../../hooks/useSignup';

export default function SignupPage() {
  const { signup, error } = useSignup();

  const handleSubmit = async (values) => {
      const user = {
          name: values.name || undefined,
          username: values.username || undefined,
          email: values.email || undefined,
          password: values.password || undefined,
      };
      await signup(user);
  };
  return (
    <div className={styles.container}>
   <Formik
      initialValues={{
        name: '',
        username: '',
        email: '',
        password: '',
        confirm_password: '',
      }}
      validate={values => {
        const errors = {};
        if (!values.name) {
          errors.name = 'Required';
        }
        if (!values.username) {
          errors.username = 'Required';
        }
        if (!values.email) {
          errors.email = 'Required';
      }else if (!emailRegex.test(values.email)) {
          errors.email = 'Invalid email address';
        }
        if (!values.password) {
          errors.password = 'Required';
        }else if(mediumRegex.test(values.password) === false || strongRegex.test(values.password) === false){
          errors.password = 'Password must contain at least 1 lowercase, 1 uppercase, 1 numeric, 1 special character and 8 characters long';
        }
        if (!values.confirm_password) {
          errors.confirm_password = 'Required';
        } else if (values.confirm_password !== values.password) {
          errors.confirm_password = 'Password does not match';
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
              Sign up
            </div>
            <div className={styles.form_subtitle}>
              Create a new account
            </div>
            <div className={styles.input_group}>
              <div className={styles.input_label}>
                Name
              </div>
              <input 
                className={styles.input} 
                type='name'
                name='name'
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur} 
                />
                {errors.name && touched.name && (
                  <div className={styles.error}>{errors.name}</div>
                )}
            </div>
            <div className={styles.input_group}>
              <div className={styles.input_label}>
                Username
              </div>
              <input 
                className={styles.input} 
                type='username'
                name='username'
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur} 
                />
                {errors.username && touched.username && (
                  <div className={styles.error}>{errors.username}</div>
                )}
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
            <div className={styles.input_group}>
              <div className={styles.input_label}>
                Confirm Password
              </div>
              <input 
                className={styles.input} 
                type='password'
                name='confirm_password'
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur} 
                />
                {errors.confirm_password && touched.confirm_password && (
                  <div className={styles.error}>{errors.confirm_password}</div>
                )}
            </div>
            <button 
              className={styles.action_btn} 
              type='submit'
              disabled={isSubmitting}
              >
              Sign up
            </button>
            <div className={styles.form_footer}>
              <div className={styles.form_footer_text}>Already have an account?</div> 
              <a className={styles.form_footer_link} href={Links.SignInPage.path}>Sign in</a>
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