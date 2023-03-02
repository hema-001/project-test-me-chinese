import React from 'react';
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { Links } from './links/links';
import NavBar from './navigation/NavBar';
import Footer from './navigation/Footer';
import MainPage from './pages/MainPage';
import SigninPage from './pages/SigninPage';
import { useAuthContext } from './hooks/useAuthContext';
function App() {
  const { user } = useAuthContext();
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={Links.MainPage.path} element={<MainPage />} />
        <Route path={Links.SignInPage.path} element={
          user ? <Navigate to={Links.MainPage.path} /> : <SigninPage />
        }/>
        <Route path={Links.TestPage.path} element={
          !user ? <Navigate to={Links.SignInPage.path} /> : <div>Test Page</div>
        } />
        <Route path={Links.NoMatch.path} element={<div>404</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
