import React from "react";
import "./AboutPage.css";

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <>
      <h1 className="about">Tools Utilized.</h1>
      <ul></ul>
      <h3>
        <li className="about">HTML 5</li>
      </h3>
      <h3>
        <li className="about">CSS 3</li>
      </h3>
      <h3>
        <li className="about">Javascript</li>
      </h3>
      <h3>
        <li className="about">JQUERY</li>
      </h3>
      <h3>
        <li className="about">REST API - SQL</li>
      </h3>
      <h3>
        <li className="about">REACT</li>
      </h3>
      <h3>
        <li className="about">NODE.js</li>
      </h3>
      <h3>
        <li className="about">REDUX-SAGA AND STATE  MANAGEMENT</li>
      </h3>
      
    </>
  );
}

export default AboutPage;
