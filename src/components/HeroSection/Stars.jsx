
const generateStarDots = (count) => {
    return [...Array(count)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-white rounded-full animate-rise"
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


function Stars() {
  return (
     <>
     <div className="fixed inset-0 overflow-hidden">
     {generateStarDots(300)}
   </div>
     </>
  )
}

export default Stars