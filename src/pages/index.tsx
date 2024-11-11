import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './projects.module.css'; // Custom styles for this page

const Projects = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title="My Projects" description="A showcase of my work with 3D printing, programming, and robotics.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <Heading as="h1" className="hero__title">Projects</Heading>
          <p className="hero__subtitle">A collection of my past and current projects.</p>
        </div>
      </header>
      
      <main>
        <div className="container">
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

          <div className={clsx("win7", styles.win7)}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Learn More About My Projects
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Projects;
