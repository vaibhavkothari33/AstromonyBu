import { useState } from "react";
import PropTypes from "prop-types";
import Stars from "../HeroSection/Stars";

const GalleryGrid = () => {
  const galleryItems = [
    { id: 1, src: "https://i.ibb.co/whpS2bwC/Screenshot-2025-01-31-025852.png", alt: "Vaibhav 1" },
    { id: 2, src: "https://i.ibb.co/WW8kLk10/Screenshot-2025-01-31-025746.png", alt: "Event 2" },
    { id: 3, src: "https://i.ibb.co/dvm8qHK/Screenshot-2025-01-31-025732.png", alt: "Event 4" },
    { id: 7, src: "https://i.ibb.co/jvpDqjJb/Screenshot-2025-01-31-025610.png", alt: "Event 5" },
    { id: 8, src: "https://i.ibb.co/JSXVFHp/Screenshot-2025-01-31-030722.png", alt: "Vaibhav 3" },
    { id: 9, src: "https://i.ibb.co/4ZC98tm0/Screenshot-2025-01-31-025841.png", alt: "Event 8" },
    { id: 4, src: "/cool2.png", alt: "Event 3" },
    { id: 5, src: "/image.png", alt: "Vaibhav 2" },
    { id: 6, src: "/cool1.png", alt: "Event 6" },
    
    { id: 10, src: "/cool3.png", alt: "Event 7" },
    { id: 11, src: "https://i.ibb.co/ymdCqj4q/Screenshot-2025-01-31-030711.png", alt: "Event 9" },
    { id: 12, src: "https://i.ibb.co/rP71Ncb/Screenshot-2025-01-31-030701.png", alt: "Event 10" },
    
    { id: 12, src: "https://i.ibb.co/99vwdZ9N/Whats-App-Image-2025-01-31-at-3-16-37-AM.jpg", alt: "Event 10" },
    { id: 12, src: "https://i.ibb.co/G4FT1CzV/Whats-App-Image-2025-01-31-at-3-16-36-AM-1.jpg", alt: "Event 10" },
    { id: 12, src: "https://i.ibb.co/j9pTzz0R/Whats-App-Image-2025-01-31-at-3-16-36-AM.jpg", },
  
    { id: 12, src: "https://i.ibb.co/v6ZXCnSW/Whats-App-Image-2025-01-31-at-3-16-37-AM-1.jpg", alt: "Event 10" },
  ];

  return (
    <div className="relative min-h-screen bg-black pt-24 pb-16 px-4 overflow-hidden">
      <Stars />
      <h2 className="text-4xl font-bold text-center text-white mb-16">Astro Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryItems.map((item, index) => (
          <ImageWithSkeleton key={item.id} src={item.src} alt={item.alt} delay={index * 150} />
        ))}
      </div>
    </div>
  );
};

// Image Component with Skeleton Loader & Prop Validation
const ImageWithSkeleton = ({ src, alt, delay }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-lg bg-gray-800">
      {/* Skeleton Loader (Visible until Image Loads) */}
      {!loaded && (
        <div className="absolute inset-0 bg-gray-700 flex items-center justify-center animate-pulse">
          <span className="text-gray-500">Loading...</span>
        </div>
      )}

      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-64 object-cover transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ animationDelay: `${delay}ms` }}
      />

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <p className="text-white text-lg font-medium">{alt}</p>
      </div>
    </div>
  );
};

// ✅ Prop Validation to Avoid Missing Props
ImageWithSkeleton.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  delay: PropTypes.number,
};

export default GalleryGrid;
