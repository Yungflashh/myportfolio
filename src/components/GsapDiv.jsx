import{ useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const RollingDiv = () => {
  const divRef = useRef(null);

  useEffect(() => {
    // GSAP animation
    gsap.fromTo(
      divRef.current,
      { rotation: -360, x: -100, opacity: 0 }, // Starting position
      { 
        rotation: 0, 
        x: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power2.out" // Easing function
      }
    );
  }, []);

  return (
    <div ref={divRef}>
      
    </div>
  );
};



export default RollingDiv;
