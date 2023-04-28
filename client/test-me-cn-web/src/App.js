import React from 'react';
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { Links } from './links/links';
import NavBar from './navigation/navbar/NavBar';
import Landing from './pages/landing/Landing';
import SigninPage from './pages/signin/SigninPage';
import SignupPage from './pages/signup/SignupPage';
import { useAuthContext } from './hooks/useAuthContext';
function App() {
  const { user } = useAuthContext();
  console.log("App user: ", user);
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={Links.MainPage.path} element={<Landing />} />
        <Route path={Links.SignInPage.path} element={
          user ? <Navigate to={Links.MainPage.path} /> : <SigninPage />
        }/>
        <Route path={Links.TestPage.path} element={
          !user ? <Navigate to={Links.SignInPage.path} /> : <div>Test Page</div>
        } />
        <Route path={Links.SignUpPage.path} element={
          user ? <Navigate to={Links.MainPage.path} /> : <SignupPage />
        } />
        <Route path={Links.NoMatch.path} element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
