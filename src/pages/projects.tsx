import React from 'react';
import Layout from '@theme/Layout'; // This imports the default Docusaurus layout component

const Projects = () => {
  return (
    <Layout title="My Projects" description="Showcasing some of my work with 3D printing, programming, and robotics.">
      <div className="container">
        <div className="content">
          <h1>3D Printing Projects</h1>
          <p>Quick Example of some items I printed. Yes, Octoprint/Cam is better. This is from years ago.</p>
          <div className="iframe-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/USEMXvq2PZg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <h1>Programming Projects</h1>

          <h1>Combat Robotics</h1>
          <h2>College Team</h2>

          <h2>High School Team</h2>
          <h3>2023 Season</h3>
          <div className="iframe-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/n7SJnRNeklM?si=oyU60oNtmcQ7PZ99"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <h3>2022 Season</h3>
          <div className="iframe-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/BHme7fJbSTU?si=ko8lP8m4gRiZjeqG"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <h1>Misc. Projects</h1>
          <h3>Game of Drones</h3>
          <div className="iframe-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/zy-A3tYQ9-8?si=RbQO6KYsHl4RdqMp"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
