import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Sparkle = ({ x, y }) => (
  <div
    className="sparkle"
    style={{
      left: `${x}px`,
      top: `${y}px`,
    }}
  />
);

const SparkleTrail = () => {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const addSparkle = (e) => {
      const newSparkle = { x: e.clientX, y: e.clientY, id: Date.now() };
      setSparkles((prev) => [...prev, newSparkle]);
    };

    window.addEventListener('mousemove', addSparkle);

    const interval = setInterval(() => {
      setSparkles((prev) => prev.slice(1));
    }, 100);

    return () => {
      window.removeEventListener('mousemove', addSparkle);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="sparkle-trail">
      {sparkles.map((sparkle) => (
        <Sparkle key={sparkle.id} x={sparkle.x} y={sparkle.y} />
      ))}
    </div>
  );
};

Sparkle.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default SparkleTrail;
