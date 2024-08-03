import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRememberMeChange = (e) => setRememberMe(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log({ email, password, rememberMe });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div data-mdb-input-init className="form-outline mb-4">
        <input
          type="email"
          id="form2Example1"
          className="form-control"
          value={email}
          onChange={handleEmailChange}
          placeholder='Email address'
        />
      </div>

      <div data-mdb-input-init className="form-outline mb-4">
        <input
          type="password"
          id="form2Example2"
          className="form-control"
          value={password}
          onChange={handlePasswordChange}
          placeholder='Password'
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
              onChange={handleRememberMeChange}
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

      <button
        type="submit"
        className="btn btn-primary btn-block mb-4"
      >
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
