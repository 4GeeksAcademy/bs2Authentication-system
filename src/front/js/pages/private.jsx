import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Private = () => {
  const { store, actions } = useContext(Context);
  //const sessionData = () => actions.getPrivate(sessionStorage.getItem("token"));

  return (
    <div className="container d-flex justify-content-center">
      <h1>This page is private</h1>
      <p>{store.name || "error"}</p>
    </div>
  );
};
