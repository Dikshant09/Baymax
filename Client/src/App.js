import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import axios from 'axios';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Predict from './components/Predict/Predict';
import Header from './components/Header/Header';
import About from './components/About/About';
import GetStarted from './components/GetStarted/GetStarted';
import Spinner from './components/Spinner/Spinner';
import SignIn from './components/SignIn/SignIn';
import Register from './components/SignUp/SignUp';
import SignUp from './components/SignUp/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/PrivateRoute';
import Footer from './components/Footer/Footer';

function App() {
  const [disease, setDisease] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleClick = async(e) => {
    e.preventDefault();

    axios.post("https://dikshant09-disease-prediction-api.hf.space/run/predict", {
      data: ["Blurred And Distorted Vision"]
    })
    .then((response) => setDisease(String(response.data.data).replace("|", "  ")))
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path = '/' element = { <Home /> } />
        {/* <Route path = '/about' element = { <About /> } /> */}

        {/* Authentication End Points */}
        <Route path = '/signin' element = { <SignIn /> } />
        <Route path = '/signup' element = { <SignUp /> } />
        <Route path = '/get-started' element = { <GetStarted /> } />

        <Route path='/profile' element={<PrivateRoute />}>
          <Route path = '/profile' element = { <Profile /> } />
        </Route>
        
        <Route path='/predict' element={<PrivateRoute />}>
          <Route path = '/predict' element = { <Predict /> } />
        </Route>
        
      </Routes>
      {/* <Footer /> */}
      <ToastContainer />
    </Router>
  );
}

export default App;