import React from "react";
import "./loading.scss";
const loading = () => {
  return (
    <section className="containerLoading">
      <h1>Loading...</h1>
      <div className="sk-folding-cube">
        <div className="sk-cube1 sk-cube"></div>
        <div className="sk-cube2 sk-cube"></div>
        <div className="sk-cube4 sk-cube"></div>
        <div className="sk-cube3 sk-cube"></div>
      </div>
    </section>
  );
};
export default loading;
