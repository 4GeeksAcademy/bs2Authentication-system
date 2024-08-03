import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Login } from "../component/login.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="mt-5">
      <div className="text-center">
        <h1>Welcome!</h1>
        <div className="alert alert-info container col-3 justify-content-center">
          {store.message ||
            "Loading message from the backend (make sure your python backend is running)..."}
          <div className="mt-3">
            <Link to="/signup">
              <button className="btn btn-primary ms-1">Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-center">
        <div>
          <Login />
        </div>
      </div>
    </div>
  );
};
