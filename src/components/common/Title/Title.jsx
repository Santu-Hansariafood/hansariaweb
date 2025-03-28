'use client';

import React from 'react';
import TrueFocus from '../../animation/TrueFocus/TrueFocus';

const Title = ({ sentence, manualMode, blurAmount, borderColor, glowColor, animationDuration, pauseBetweenAnimations }) => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <TrueFocus 
        sentence={sentence} 
        manualMode={manualMode} 
        blurAmount={blurAmount} 
        borderColor={borderColor} 
        glowColor={glowColor} 
        animationDuration={animationDuration} 
        pauseBetweenAnimations={pauseBetweenAnimations} 
      />
    </div>
  );
};

export default Title;
