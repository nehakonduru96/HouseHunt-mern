import React from 'react';
import './LoadingAnimation.css'; // Import the CSS file for animations

const LoadingAnimation = () => {
  return (
    <div className="loading-container">
      <div className="loading-text">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="house-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
        {'HouseHunt'.split('').map((letter, index) => (
          <span key={index} className={`letter letter-${index + 1}`}>{letter}</span>
        ))}
      </div>
      <div className="loading-bar"></div> {/* Add the loading bar */}
    </div>
  );
};

export default LoadingAnimation;
