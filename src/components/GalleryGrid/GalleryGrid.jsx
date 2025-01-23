const GalleryGrid = () => {

    const galleryItems = [
        { id: 1, src: "http://vaibhavkothari.me/Astronomy/Space%20Connect/image/cool1.jpg", alt: "vaibhav 1" },
        { id: 2, src: "http://vaibhavkothari.me/Astronomy/Space%20Connect/image/image1111.png", alt: "Event 2" },
        { id: 3, src: "http://vaibhavkothari.me/Astronomy/Space%20Connect/image/cool3.jpg", alt: "Event 3" },
        { id: 3, src: "http://vaibhavkothari.me/Astronomy/Space%20Connect/image/cool2.jpg", alt: "Event 3" },
        { id: 1, src: "http://vaibhavkothari.me/Astronomy/Space%20Connect/image/cool1.jpg", alt: "vaibhav 1" },
        { id: 2, src: "http://vaibhavkothari.me/Astronomy/Space%20Connect/image/image1111.png", alt: "Event 2" },
        { id: 3, src: "http://vaibhavkothari.me/Astronomy/Space%20Connect/image/cool3.jpg", alt: "Event 3" },
        { id: 3, src: "http://vaibhavkothari.me/Astronomy/Space%20Connect/image/cool2.jpg", alt: "Event 3" },
        { id: 1, src: "http://vaibhavkothari.me/Astronomy/Space%20Connect/image/cool1.jpg", alt: "vaibhav 1" },
        { id: 2, src: "http://vaibhavkothari.me/Astronomy/Space%20Connect/image/image1111.png", alt: "Event 2" },
        { id: 3, src: "http://vaibhavkothari.me/Astronomy/Space%20Connect/image/cool3.jpg", alt: "Event 3" },
        { id: 3, src: "http://vaibhavkothari.me/Astronomy/Space%20Connect/image/cool2.jpg", alt: "Event 3" },
       
    ];
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
          {generateStarDots(250)}
        </div>
      
            <h2 className="text-4xl font-bold text-center text-white mb-16">
                Astro Gallery
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {galleryItems.map((item, index) => (
                    <div
                        key={item.id}
                        className="relative overflow-hidden rounded-lg group
                       animate-fade-up opacity-0"
                        style={{
                            animationDelay: `${index * 150}ms`,
                            animationFillMode: 'forwards'
                        }}
                    >
                        <img
                            src={item.src}
                            alt={item.alt}
                            className="w-full h-full object-cover transition-transform duration-300
                         group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100
                          transition-opacity duration-300 flex items-center justify-center">
                            <p className="text-white text-lg font-medium">{item.alt}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryGrid;