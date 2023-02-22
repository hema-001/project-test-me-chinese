import React from 'react';
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { Links } from './links/links';
import PrivateRoute from './auth/PrivateRoute';
import NavBar from './navigation/NavBar';
import Footer from './navigation/Footer';
import MainPage from './pages/MainPage';
import SigninPage from './pages/SigninPage';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={Links.MainPage.path} element={<MainPage />} />
        <Route path={Links.SignInPage.path} element={<SigninPage />} />
        <Route path={Links.SignUpPage.path} element={<div>Sign Up</div>} />
        <Route path={Links.TestPage.path} element={<PrivateRoute>
          <div>Test</div>
        </PrivateRoute>} />
        <Route path={Links.NoMatch.path} element={<div>404</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
