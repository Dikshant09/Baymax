import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import Spinner from "../Spinner/Spinner";

import "./../../../src/index.scss";
import OAuth from "../OAuth/OAuth";

import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase.config.js";

const SignUp = () => {
  const navigate = useNavigate();

  const [User, setUser] = useState({
    email: "",
    password: "",
    password2: "",
    name: "",
    isLoading: false,
  });

  const { email, password, password2, name, isLoading } = User;

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

    if (email === "" || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (name === "") return toast.error("Please enter a name");
    if (password.length < 6)
      return toast.error("Password must be at least 6 characters long");
    if (password !== password2) return toast.error("Passwords do not match");

    try {
      const auth = getAuth();

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      updateProfile(auth.currentUser, {
        displayName: name,
      });

      const formDataCopy = { ...User };

      // Removing unrealevant fields
      delete formDataCopy.password;
      delete formDataCopy.password2;
      delete formDataCopy.isLoading;

      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, "users", user.uid), formDataCopy);

      toast.success("Signed Up Successfully");
      navigate("/predict");
    } catch (error) {
      toast.error("Something went wrong with registeration");
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
          <FaUser /> Register
        </h1>
        <p>Please Create an account</p>
      </section>
      <section className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your name"
              required
            />
          </div>
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
            <input
              type="password"
              name="password2"
              value={password2}
              onChange={handleChange}
              className="form-control"
              placeholder="Confirm password"
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
          <div
            className="buttonContainer"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              margin: "0rem",
            }}
          >
            <Link className="button" to={"/signin"} style={{ margin: "20px" }}>
              Sign In
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

export default SignUp;
