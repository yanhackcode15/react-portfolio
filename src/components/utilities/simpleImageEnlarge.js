import React, { useState } from 'react';
import { Size } from 'tsparticles-engine';

const SimpleImageEnlarge = ({ src, alt }) => {
  const [isEnlarged, setIsEnlarged] = useState(false);

  const handleMouseClickToEnlarge = () => {
    setIsEnlarged(true);
  };

  const handleMouseClickToShrink = () => {
    setIsEnlarged(false);
  };

  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-block',
        cursor: 'pointer',
      }}
    >
      {isEnlarged && (
        <div
          style={{
            position: 'fixed', // Use fixed to position in the viewport
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1000, // Ensure it's above other content
            overflow: 'auto', // Make the container scrollable
            maxHeight: '90vh', // Limit the height to the viewport
            maxWidth: '90vw', // Limit the width to the viewport
            backgroundColor: 'white', // Optional: Background color for the container
            border: '1px solid #ccc', // Optional: Border for the container
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)', // Optional: Shadow for the container
          }}
          // Hide when mouse leaves the enlarged image container
        >
          <img
            src={src}
            alt={alt}
            style={{
              width: 'auto', // Maintain aspect ratio
              height: 'auto', // Maintain aspect ratio
              maxWidth: '90vw', // Allow the image to exceed the maxWidth of its parent
              maxHeight: 'none', // Allow the image to exceed the maxHeight of its parent
            }}
            onMouseDown={handleMouseClickToShrink}
          />
          <span
          style={{
            fontSize: 30,
            position: 'absolute',
            top: '10px',
            right: '10px',
            color: 'white',
            backgroundColor: 'rgba(0,0,0,0.5)',
            padding: '10px',
          }}
        >
          Click to Exit
        </span>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          display: isEnlarged ? 'none' : 'block', // Hide the small image when the large one is displayed
        }}
        onMouseDown={handleMouseClickToEnlarge}
      />
      {!isEnlarged && (
        <span
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            color: 'white',
            backgroundColor: 'rgba(0,0,0,0.5)',
            padding: '5px',
          }}
        >
          Click to Enlarge
        </span>
      )}
    </div>
  );
};

export default SimpleImageEnlarge;
