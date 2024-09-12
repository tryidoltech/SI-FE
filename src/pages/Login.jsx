import React, { useState } from "react";
import "../styles/Login.css";
import auth_img from "../assets/auth_img.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL, USERS_URL, BRANCHES_URL } from "../redux/constants";
import { useAuth } from "../redux/auth";

const userApiUrl = `${BASE_URL}${USERS_URL}`;
const branchApiUrl = `${BASE_URL}${BRANCHES_URL}`;

const Login = () => {
  const data = { email: "", password: "" };
  const [inputData, setInputData] = useState(data);
  const navigate = useNavigate();

  const storeTokenInLS = useAuth();
  const dataHandle = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${branchApiUrl}loginBranch`, inputData)
      .then((response) => {
        console.log("Response", response);
        storeTokenInLS(response.data.data.token);
        navigate("/AdminPage/AdminDashboard");
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  return (
    <div className="sign-in">
      <div className="sign-in-headings">
        <p className="sign-in-headings-sub-heading1">Sign In to</p>
        <p className="sign-in-headings-sub-heading2">Saloon Management App</p>
        <p className="sign-in-headings-sub-heading3">
          Your journey to effortless salon management begins here. <br />
          Join us and transform your business today!
        </p>
      </div>
      <div className="sign-in-form">
        <div className="sign-in-form_heading">
          <p>
            Welcome to <span>Saloon</span>
          </p>
          <p>Sign In</p>
        </div>
        <form className="sign-in__form">
          <label htmlFor="email">Username or email address</label>
          <input
            type="text"
            id="email"
            name="email"
            value={inputData.email}
            onChange={dataHandle}
            placeholder="Username or email address"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={inputData.password}
            onChange={dataHandle}
            placeholder="Password"
          />
          <div className="sign-in__form__forgot-password">
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" onClick={handleSubmit}>
            Sign in
          </button>
        </form>
      </div>
      <div className="sign-in-img">
        <img src={auth_img} alt="" />
      </div>
    </div>
  );
};

export default Login;