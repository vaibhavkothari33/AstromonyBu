import Stars from "../HeroSection/Stars";


const GalleryGrid = () => {
  const galleryItems = [
    { id: 1, src: "/image.png", alt: "Vaibhav 1" },
    { id: 2, src: "/cool1.png", alt: "Event 2" },
    { id: 3, src: "/cool2.png", alt: "Event 3" },
    { id: 4, src: "/cool3.png", alt: "Event 4" },
    { id: 5, src: "/image.png", alt: "Vaibhav 2" },
    { id: 6, src: "/cool1.png", alt: "Event 5" },
    { id: 7, src: "/cool2.png", alt: "Event 6" },
    { id: 8, src: "/cool3.png", alt: "Event 7" },
    { id: 9, src: "/image.png", alt: "Vaibhav 3" },
    { id: 10, src: "/cool1.png", alt: "Event 8" },
    { id: 11, src: "/cool2.png", alt: "Event 9" },
    { id: 12, src: "/cool3.png", alt: "Event 10" },
  ];

  return (
    <div className="relative min-h-screen bg-black pt-24 pb-16 px-4 overflow-hidden">
      <Stars/>

      <h2 className="text-4xl font-bold text-center text-white mb-16">Astro Gallery</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryItems.map((item, index) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg group animate-fade-up opacity-0"
            style={{
              animationDelay: `${index * 150}ms`,
              animationFillMode: 'forwards',
            }}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-medium">{item.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryGrid;
