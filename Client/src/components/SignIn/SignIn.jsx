import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState, useEffect, useContext } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import Spinner from "../Spinner/Spinner";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../OAuth/OAuth";

const SignIn = () => {
  
  const navigate = useNavigate();
  
  const [user, setUser] = useState({
    email: '',
    password: '',
    currentName: '',
    isLoading: false,
  });
  
  const { email, password, forgotPassword, currentName, isLoading, Data, setData } = user;

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setUser((prevState) => ({
      ...prevState,
      isLoading: true,
    }));

    try {
      const auth = getAuth();
      const userCredential = await 
      
      signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      

      const User = userCredential.user;
      if (User) {
        toast.success('Signed In Successfully');
        navigate("/predict");
      }
    } catch (error) {
      toast.error('Bad User Credentials');
    }

    setUser((prevState) => ({
      ...prevState,
      isLoading: false,
    }));
  };

  if(isLoading) return <Spinner />;

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Please Login to get support</p>
      </section>
      <section className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block" style={{padding: '8px'}}>Submit</button>
          </div>
          <div className="form-group">
            <h3 className="text-center">Or</h3>
            <Link to={'/signup'}>
              <div className="btn btn-block" style={{padding: '8px'}}> Sign UP </div>
            </Link>
          </div>
          <div className="form-group">
            <h3 className="text-center">Or</h3>
            <button className="btn btn-block" style={{padding: '8px'}} onClick={(e) => e.preventDefault()}> <OAuth text={'In'}/> </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default SignIn;
