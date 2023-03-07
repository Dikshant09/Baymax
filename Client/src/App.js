import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Predict from "./components/Predict/Predict";
import Header from "./components/Header/Header";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Authentication End Points */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/profile" element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="/predict" element={<PrivateRoute />}>
          <Route path="/predict" element={<Predict />} />
        </Route>
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
