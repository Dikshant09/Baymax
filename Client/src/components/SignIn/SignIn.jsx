import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import Spinner from "../Spinner/Spinner";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../OAuth/OAuth";

const SignIn = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
    currentName: "",
    isLoading: false,
  });

  const { email, password, isLoading } = user;

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
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const User = userCredential.user;
      if (User) {
        toast.success("Signed In Successfully");
        navigate("/predict");
      }
    } catch (error) {
      toast.error("Bad User Credentials");
    }

    setUser((prevState) => ({
      ...prevState,
      isLoading: false,
    }));
  };

  if (isLoading) return <Spinner />;

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
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="buttonContainer">
              <button className="button" style={{ margin: "20px" }}>
                Submit
              </button>
            </div>
          </div>
        </form>
        <h1 style={{ fontSize: "2rem", textAlign: "center" }}>Or</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            margin: "-0.7rem",
          }}
        >
          <div className="buttonContainer" style={{ margin: "0rem" }}>
            <Link className="button" to={"/signup"} style={{ margin: "20px" }}>
              Sign Up
            </Link>
            <button
              className="button"
              style={{ margin: "20px" }}
              onClick={(e) => e.preventDefault()}
            >
              {" "}
              <OAuth />{" "}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;
