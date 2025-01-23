import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Generate stars as small dots
  const generateStarDots = (count) => {
    return [...Array(count)].map((_, i) => (
      <div
        key={i}
        className="absolute w-0.5 h-0.5 bg-white rounded-full animate-rise"
        style={{
          left: `${Math.random() * 100}%`,
          bottom: '-4px',
          opacity: Math.random() * 0.7 + 0.3,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${Math.random() * 2 + 3}s`
        }}
      />
    ));
  };

  return (
    <div className="relative min-h-screen bg-black pt-24 pb-16 px-4 overflow-hidden">
      {/* Star dots container */}
      <div className="fixed inset-0 overflow-hidden">
        {generateStarDots(500)}
      </div>
    
      <div
        className="fixed right-8 top-1/3 transform animate-float z-30"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
        Astronomy Bu
      
      </div>
      <div
        className="fixed left-8 bottom-1/3 transform animate-float-delayed z-30"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
      </div>

      {/* Rest of your events content */}
   
    </div>
  );
};

export default HeroSection;