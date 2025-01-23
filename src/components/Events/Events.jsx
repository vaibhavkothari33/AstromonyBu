import { Calendar, Clock, MapPin, Star } from 'lucide-react';

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Star Gazing Night",
      date: "2024-01-15",
      time: "20:00 - 23:00",
      location: "University Observatory",
      image: "http://vaibhavkothari.me/Astronomy/Space%20Connect/image/cool2.jpg",
      description:
        "Join us for an enchanting evening of stargazing. We'll be observing Jupiter and its moons, along with deep-sky objects visible this season.",
      highlighted: true,
    },
    {
      id: 2,
      title: "Workshop on Astrophotography",
      date: "2024-02-10",
      time: "16:00 - 18:00",
      location: "Physics Laboratory",
      image: "http://vaibhavkothari.me/Astronomy/Space%20Connect/image/cool3.jpg",
      description:
        "Learn the basics of astrophotography, from camera settings to post-processing techniques. Bring your DSLR camera if you have one!",
    },
    {
      id: 3,
      title: "Solar Eclipse Watch Party",
      date: "2024-03-20",
      time: "14:30 - 16:30",
      location: "University Ground",
      image: "http://vaibhavkothari.me/Astronomy/Space%20Connect/image/cool1.jpg",
      description:
        "Experience the partial solar eclipse with proper safety equipment. Educational session included about the mechanics of eclipses.",
    },
    {
      id: 4,
      title: "Space Exploration Lecture",
      date: "2024-03-25",
      time: "10:00 - 12:00",
      location: "Auditorium",
      image: "http://vaibhavkothari.me/Astronomy/Space%20Connect/image/image1111.png",
      description:
        "Dive into the history of space exploration, from the Apollo missions to the latest Mars rovers. A fascinating session for space enthusiasts.",
    },
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
          animationDuration: `${Math.random() * 2 + 3}s`,
        }}
      />
    ));
  };

  return (
    <div className="relative min-h-screen bg-black pt-24 pb-16 px-4 overflow-hidden text-white">
      {/* Star dots container */}
      <div className="fixed inset-0 overflow-hidden">{generateStarDots(250)}</div>

      <div className="max-w-7xl mx-auto relative">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Our Events
        </h1>

        <div className="space-y-16">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="md:w-2/5 relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                  {event.highlighted && (
                    <div className="absolute top-4 left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      Featured Event
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="md:w-3/5 p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                    {event.title}
                  </h2>

                  <div className="space-y-3 text-gray-300 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-purple-400" />
                      <span>
                        {new Date(event.date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-purple-400" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-purple-400" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-8">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
