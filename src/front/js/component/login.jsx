import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRememberMeChange = (e) => setRememberMe(e.target.checked);
  const navigate = useNavigate();

  const token = sessionStorage.getItem("token");
  console.log("This is your token", store.token);
  const handleSubmit = () => {
    actions.login(email, password);
    /* actions.getPrivate(token);
    navigate("/private");
    console.log("here"); */
  };

  if (store.token && store.token !== "" && store.token != undefined) navigate("/private")
  
    return (
    <form onSubmit={() => handleSubmit()}>
      <div data-mdb-input-init className="form-outline mb-4">
        <input
          type="email"
          id="form2Example1"
          className="form-control"
          value={email}
          onChange={(e) => handleEmailChange(e)}
          placeholder="Email address"
        />
      </div>

      <div data-mdb-input-init className="form-outline mb-4">
        <input
          type="password"
          id="form2Example2"
          className="form-control"
          value={password}
          onChange={(e) => handlePasswordChange(e)}
          placeholder="Password"
        />
      </div>

      <div className="row mb-4">
        <div className="col d-flex justify-content-center">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="form2Example31"
              checked={rememberMe}
              onChange={(e) => handleRememberMeChange(e)}
            />
            <label className="form-check-label" htmlFor="form2Example31">
              Remember me
            </label>
          </div>
        </div>

        <div className="col">
          <a href="#!">Forgot password?</a>
        </div>
      </div>

      <button type="submit" className="btn btn-primary btn-block mb-4 col-10">
        Sign in
      </button>

      <div className="text-center">
        <p>
          Not a member? <a href="/register">Register</a>
        </p>
        <p>or sign up with:</p>
        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-facebook-f"></i>
        </button>
        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-google"></i>
        </button>
        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-twitter"></i>
        </button>
        <button type="button" className="btn btn-link btn-floating mx-1">
          <i className="fab fa-github"></i>
        </button>
      </div>
    </form>
  );
};

export default Login;
