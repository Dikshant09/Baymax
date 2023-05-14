import React from "react";
import './About.scss';

const About = () => {
  return (
    <div className="about-parent-container">
      <div className="about-container">
        <div className="about-info">
          <div className="head-text">BayMax</div>
          <div className="p-text"> A  ML web app that predicts disease</div>
          <ul className="about-details">
            <p className="about-detail-item">It's a web app that can predict the disease based on user symptoms.</p>
            <p className="about-detail-item">The data we're using is taken from Kaggle.</p>
            <p className="about-detail-item">Python & its libraries such as Pandas, Numpy, Matplotlib & Sklearn is used for model creation.</p>
            <p className="about-detail-item">React is used as Frontend and Sass is used for Stydivng.</p>
            <p className="about-detail-item">Google Firebase & Firestore is used as Backend.</p>
            <p className="about-detail-item">Google OAuth is used for authentication purposes</p>
          </ul>
        </div>
        <div className="about-tech">
          <h1>Tech Stack</h1>
          <div>
            <div className="tech-logos">Python</div>
            <div className="tech-logos">Numpy</div>
            <div className="tech-logos">Pandas</div>
            <div className="tech-logos">Matplotlib</div>
            <div className="tech-logos">React</div>
            <div className="tech-logos">Firebase</div>
            <div className="tech-logos">HTML</div>
            <div className="tech-logos">SCSS</div>
          </div>
          <a href="https://github.com/dikshant09/baymax" without rel="noreferrer" target="_blank">
            <h2>See on <span style={{color: 'blue'}}>Github</span></h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;