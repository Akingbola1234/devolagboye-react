import React from "react";
import "./Projects.css";
import nftLandPage from "../../assets/images/Landing Page NFT - Apollo NFT (Community).png"

const Projects = () => {
  return (
    <div className="projects-container">
      <div>
        <h6 className="text">Selected Projects</h6>
      </div>
      <div className="project-details">
        <div className="year">
          <p>2023</p>
        </div>
        <div className="project-main-details">
          <h5 className="project-name">Apollo NFT MarketPlace</h5>
          <p className="project-details">
            Apollo NFT MarketPlace is a project I designed after my interest in
            web3 and its ecosystem.
          </p>
          <p className="project-details">
            I got the inspiration for this from the figma community.
          </p>
          <a href="##" className="case-study-link">Read case study</a>
          <a href="https://nft-marketplace-landing-page.netlify.app/">
            <img src={nftLandPage} alt="NFT Land page"  className="project-image"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
