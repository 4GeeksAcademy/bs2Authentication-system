import React, { useState } from "react";
import getlogin from "../../functions/getlogin.jsx";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = { email: "", password: "" };

    if (email === "") {
      newErrors.email = "Email is required";
    }
    if (password === "") {
      newErrors.password = "Password is required";
    }

    if (newErrors.email || newErrors.password) {
      setErrors(newErrors);
    } else {
      // Proceed with form submission
      console.log("Form submitted");
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-5 mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className={`form-control ${errors.password ? "is-invalid" : ""}`}
          id="exampleInputPassword1"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && (
          <div className="invalid-feedback">{errors.password}</div>
        )}
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Remember me
        </label>
      </div>
      <button type="submit" className="btn btn-primary col-12">
        Login
      </button>
    </form>
  );
};
