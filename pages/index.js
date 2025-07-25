import React from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import SparkleTrail from '../components/SparkleTrail';
import AboutMe from '../components/AboutSection';
import ContactMe from '../components/ContactMe';
import Skills from '../components/SkillSection';
import Certificates from '../components/Cert';
import Footer from '../components/FootNote';
import Projects from '../components/ProjectCard';

function Home() {
  return (
    <div
      className="main-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '20px 0',
      }}
    >
      <div
        className="button-row section"
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '4px',
          flexWrap: 'wrap',
          marginBottom: '10px',
        }}
      >
        <div>
          <Image
            className="neon-sign"
            src="/neonsign.gif"
            alt="A neon sign that reads Emily Lemony Drew"
            width={260}
            height={250}
          />
        </div>
        <div>
          <Image
            className="portrait"
            src="/portfolioportrait.png"
            alt="Photo of Lemony"
            width={200}
            height={190}
          />
        </div>
      </div>
      {/* Sparkle Trail */}
      <SparkleTrail />

      <div className="grad">
        <h1>Nashville Software School Graduate</h1>
      </div>

      <AboutMe />

      <hr className="rounded" />

      <div
        className="button-row section"
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px',
          flexWrap: 'wrap',
        }}
      >
        <div
          className="type-2 all-main"
          onClick={() => window.open('https://www.linkedin.com/in/lemony-web-dev', '_blank')}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              window.open('https://www.linkedin.com/in/lemony-web-dev', '_blank');
            }
          }}
          role="button"
          tabIndex={0}
          style={{
            marginTop: '4px',
            marginBottom: '20px', // Adjust spacing between Header and Welcome
          }}
        >
          <Image
            src="/linkedinicon.png"
            alt="GitHub"
            width={34}
            height={34}
          />
        </div>

        <div
          className="type-3 all-main"
          onClick={() => window.open('https://github.com/EmilyLemonyDrewL', '_blank')}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              window.open('https://github.com/EmilyLemonyDrewL', '_blank');
            }
          }}
          role="button"
          tabIndex={0} // Allows keyboard navigation
          style={{
            marginTop: '4px',
            marginBottom: '20px',
            cursor: 'pointer',
          }}
        >
          <Image
            src="/githubicon.png"
            alt="GitHub"
            width={34}
            height={34}
          />
        </div>

        <div
          className="type-1 all-main"
          onClick={() => window.open('https://www.instagram.com/lemonywebdev/?hl=en', '_blank')}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              window.open('https://www.instagram.com/lemonywebdev/?hl=en', '_blank');
            }
          }}
          role="button"
          tabIndex={0}
          style={{
            marginTop: '4px',
            marginBottom: '20px', // Adjust spacing between Header and Welcome
          }}
        >
          <Image
            src="/instaicon.png"
            alt="GitHub"
            width={34}
            height={34}
          />
        </div>
      </div>

      <div
        className="type-2 all-main"
        onClick={() => { window.location.href = '/EmilyDrewL-Resume.pdf'; }} // Fix: Wrapped in {}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            window.location.href = '/EmilyDrewL-Resume.pdf';
          }
        }}
        role="button"
        tabIndex={0}
        style={{
          marginTop: '0px',
          marginBottom: '0px', // Adjust spacing between Header and Welcome
        }}
      >
        <h2>DOWNLOAD MY RESUME</h2>
      </div>
      <div />

      <div className="divider" />

      <Skills />

      <Certificates />

      <div className="divider-2" />

      <h2>Projects</h2>

      <Projects />

      <ContactMe />

      <Footer />

    </div>
  );
}

export default Home;
