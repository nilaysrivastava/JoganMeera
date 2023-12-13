import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { BiShow, BiHide } from "react-icons/bi";
import Navbar from '../components/Navbar';

const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    if (!showPassword) {
      setTimeout(() => {
        setShowPassword(false);
      }, 1500);
    }
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  fetch("http://localhost:4000/api/createuser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: credentials.name,
      email: credentials.email,
      password: credentials.password,
      location: credentials.location,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        return response.json();
      } else {
        console.log("Response was not in JSON format.");
        return null; // or handle this case accordingly
      }
    })
    .then((json) => {
      if (json && !json.success) {
        alert("Enter valid credentials");
      }
      console.log(json);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
};



  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]:event.target.value });
  };

  return (
    <div>
        <div><Navbar/></div>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", maxWidth:"30rem", backgroundColor:"white", color:"white", margin:"2rem", borderRadius:"25px"}}>
            <form onSubmit={handleSubmit} style={{maxWidth:"30rem", backgroundColor:"ffffff", color:"white", padding:"1.5rem"}}>
                {/* <h3 style={{color:"black"}}>Signup</h3> */}
                <div className="form-group mb-3">
                  <label htmlFor="userName" style={{ color: "black" }}>
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter username"
                    name="name"
                    value={credentials.name}
                    onChange={onChange}
                    style={{ backgroundColor: "white", color: "black" }}
                  />
                  {/* <small
                    id="emailHelp"
                    className="form-text"
                    style={{ color: "#ff7800" }}
                  >
                    We'll never share your email with anyone else.
                  </small> */}
                </div>
                <div className="form-group mb-4">
                  <label
                    htmlFor="exampleInputEmail1"
                    style={{ color: "black" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Email"
                    name="email"
                    value={credentials.email}
                    onChange={onChange}
                    style={{ backgroundColor: "white", color: "black" }}
                  />
                </div>
                <div className="form-group mb-4">
                  <label
                    htmlFor="exampleInputPassword1"
                    style={{ color: "black" }}
                  >
                    Password
                  </label>
                  <div className="input-group">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{ backgroundColor: "white", color: "black" }}
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <BiHide /> : <BiShow />}
                    </button>
                  </div>
                </div>
                <div className="form-group mb-4">
                  <label
                    htmlFor="exampleInputAddress1"
                    style={{ color: "black" }}
                  >
                    Address
                  </label>
                  <input
                    type="address"
                    className="form-control"
                    id="exampleInputAddress1"
                    placeholder="Address"
                    name="location"
                    value={credentials.location}
                    onChange={onChange}
                    style={{ backgroundColor: "white", color: "black" }}
                  />
                </div>
                <Button
                  className="btn my-2 my-sm-0"
                  variant="primary"
                  type="submit"
                  style={{
                    backgroundColor: "#ff7800",
                    width: "100%",
                    color: "#000000",
                    borderColor: "#ff7800",
                  }}
                >
                  Signup
                </Button>
                <p className="mt-3" style={{ color: "black" }}>
                  By creating an account, I accept the{" "}
                  <Link
                    to="/terms"
                    style={{ textDecoration: "none", color: "#ff7800" }}
                  >
                    Terms & Conditions
                  </Link>
                  &nbsp; &amp; &nbsp;
                  <Link
                    to="/privacy"
                    style={{ textDecoration: "none", color: "#ff7800" }}
                  >
                    Privacy Policy
                  </Link>
                </p>
                <p style={{color: "black", textAlign:"centre" }}>Already have an account?</p>
                <Button
                  className="btn my-2 my-sm-0"
                  variant="primary"
                  type="submit"
                  style={{
                    backgroundColor: "#ff7800",
                    width: "100%",
                    color: "#000000",
                    borderColor: "#ff7800",
                  }}
                >
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Login
                  </Link>
                </Button>
              </form></div></div>
        
      
    </div>
  );
};

export default Signup;
