import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Private = () => {
  const { store, actions } = useContext(Context);
  if (store.token == "" && store.token == undefined)
    useNavigate("/")
  //const sessionData = () => actions.getPrivate(sessionStorage.getItem("token"));

  return (
    <div className="container d-flex justify-content-center">
      <h1>This page is private</h1>
      <p>{store.name || "error"}</p>
    </div>
  );
};
