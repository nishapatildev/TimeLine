import React from 'react';
import './styles/App.css';
import Navbar from './components/Navbar/navbar_index';
import Login from './components/LoginForm/loginform_index';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  
  return (
    <Router>

   <Navbar></Navbar>
   <Login></Login> 
    
    </Router>
  );
  
}

export default App;
