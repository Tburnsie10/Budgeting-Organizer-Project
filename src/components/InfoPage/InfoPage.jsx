import React from "react";
import "./InfoPage.css";

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <>
      <div className="container">
        <p className="top">
          <h2>The importance of building a budget.</h2>
        </p>
      </div>
      <div className="top">
        <a href="https://www.investopedia.com/financial-edge/1109/6-reasons-why-you-need-a-budget.aspx#:~:text=Having%20a%20budget%20keeps%20your,risky%20spending%20habits%2C%20and%20more.">
          5 Reasons You Need A Budget
        </a>
      </div>
      <div className="video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/udHzPjxq2lg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
}

export default InfoPage;
