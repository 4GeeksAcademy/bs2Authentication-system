import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Login from "../component/login.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5 container col-8">
      <h1>Welcome!!</h1>
      <div className="alert alert-info">
        {store.message ||
          "Have a great day!"}
      </div>
      <div className="container col-6 border rounded p-4 bg-light">
        <Login />
      </div>
    </div>
  );
};
