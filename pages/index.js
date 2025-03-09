import React from 'react';
import Image from 'next/image';
import SparkleTrail from '../components/SparkleTrail';

function Home() {
  return (
    <div
      className="main-container"
      style={{
        display: 'flex',
        flexDirection: 'column', // Stack items vertically
        alignItems: 'center', // Center items horizontally
        position: 'relative',
        overflow: 'hidden', // Ensure overflow is hidden
        padding: '20px 0', // Add vertical padding
      }}
    >

      {/* Sparkle Trail */}
      <SparkleTrail />

      {/* About Section with Two Columns */}
      <div
        className="type-1 about-section all-main"
        style={{
          marginTop: '50px',
          marginBottom: '40px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px', // Space between columns
          width: '55%',
          maxWidth: '1000px', // Limit width
        }}
      >
        {/* Left Column: Image and Paragraph */}
        <div
          className="about-left"
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <h5>Hi, I&apos;m Emily <q>Lemony</q> Drew</h5>
          <Image
            src="/portimage.png" // Replace with actual image path
            alt="About Image"
            width={250}
            height={218}
          />
          <p>Skills: SQL, Python, Django, React, Next.js, Javacript, HTML & CSS, Rest APIs, and more...</p>
        </div>

        {/* Right Column: List */}
        <div
          className="about-right"
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'left',
          }}
        >
          <p className="about-me" style={{ maxWidth: '300px', fontSize: '16px' }}>
            I am a September 2024 graduate of the part-time Web Development bootcamp at Nashville Software School. My ardor for art and design has been a contant presence throughout my life. In college, I learned to manage camera equipment within the film department. In recent times, I have served as a mock up artist for a compnany that designs paper goods, like gift bags and stationary. I am inherently detail-oriented, finding immense satisfaction is projects that demand precision and an accumulation of effort over time.
          </p>
        </div>
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
          marginTop: '10px',
          marginBottom: '40px',
          cursor: 'pointer',
        }}
      >
        <h1>GITHUB</h1>
      </div>

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
          marginTop: '10px',
          marginBottom: '40px', // Adjust spacing between Header and Welcome
        }}
      >
        <h1>LINKEDIN</h1>
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
          marginTop: '10px',
          marginBottom: '40px', // Adjust spacing between Header and Welcome
        }}
      >
        <h1>INSTAGRAM</h1>
      </div>

      <div
        className="type-3 all-main"
        style={{
          marginTop: '10px',
          marginBottom: '40px', // Adjust spacing between Header and Welcome
        }}
      >
        <h1>PROJECTS</h1>
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
          marginTop: '10px',
          marginBottom: '40px', // Adjust spacing between Header and Welcome
        }}
      >
        <h1>DOWNLOAD MY RESUME</h1>
      </div>

      <div
        className="type-1 all-main"
        onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=lemonywebdev@gmail.com&su=via:%20Portfolio%20Website&body=Hi%20Emily,', '_blank')}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            window.open('https://mail.google.com/mail/?view=cm&fs=1&to=lemonywebdev@gmail.com&su=via:%20Portfolio%20Website&body=Hi%20Emily,', '_blank');
          }
        }}
        role="button"
        tabIndex={0}
        style={{
          marginTop: '10px',
          marginBottom: '40px', // Adjust spacing between Header and Welcome
        }}
      >
        <h1>EMAIL ME</h1>
      </div>
    </div>
  );
}

export default Home;
