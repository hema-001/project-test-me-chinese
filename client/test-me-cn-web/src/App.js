import React from 'react';
import MainPage from './pages/MainPage';
import NavBar from './components/NavBar';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <MainPage />
    </BrowserRouter>
  );
}

export default App;
