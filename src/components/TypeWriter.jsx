import { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const TypewriterEffect = () => {
    const texts = ["Front-End Developer", "Cinematographer", "Photographer", "Drone Pilot"];
    const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const typeText = () => {
      if (charIndex < currentText.length) {
        setDisplayedText(prev => prev + currentText[charIndex]);
        setCharIndex(prev => prev + 1);
      } else {
        setIsChanging(true); // Begin the changing process
      }
    };

    if (!isChanging) {
      const typingInterval = setInterval(typeText, 100);

      return () => clearInterval(typingInterval);
    } else {
      const fadeOutText = () => {
        gsap.to('#text', {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
            setDisplayedText(''); // Clear the displayed text
            setCharIndex(0); // Reset character index
            setIsChanging(false); // Allow new text to start typing
            gsap.to('#text', { opacity: 1, duration: 0.5 }); // Fade in
          },
        });
      };

      fadeOutText();
    }
  }, [textIndex, charIndex, isChanging, texts]);

  return (
    <div className="typewriter">
      <h1 id="text" style={{ display: 'inline-block' }}>{displayedText}</h1>
    </div>
  );
};

export default TypewriterEffect;
