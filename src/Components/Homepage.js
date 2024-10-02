import React, { useState } from "react";
import axios from "axios";

export default function Homepage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(""); // For signup

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      try {
        const response = await axios.post("http://localhost:8080/api/users/login", {
          email: email,
          password: password,
        });
        alert(response.data); // Handle success
      } catch (error) {
        alert("Login failed: " + error.response?.data || "Unknown error"); // Handle failure
      }
    } else {
      try {
        const response = await axios.post("http://localhost:8080/api/users/register", {
          username: username,
          email: email,
          password: password,
        });
        alert("Registration successful!"); // Handle success
      } catch (error) {
        alert("Signup failed: " + error.response?.data || "Unknown error"); // Handle failure
      }
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle">
          <button
            className={isLogin ? "active" : " "}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : " "}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          {isLogin ? (
            <div className="form">
              <h2>Login Form</h2>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <a href="#" onClick={() => alert("Reset link sent!")}>Forgot Password?</a>
              <button type="submit">Login</button>
              <p>
                Not a User?{" "}
                <a href="#" onClick={() => setIsLogin(false)}>
                  Signup Now
                </a>
              </p>
            </div>
          ) : (
            <div className="form">
              <h2>Signup Form</h2>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">SignUp</button>
              <p>
                Already have an account?{" "}
                <a href="#" onClick={() => setIsLogin(true)}>
                  Login
                </a>
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
