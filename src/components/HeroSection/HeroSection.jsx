import { Instagram, Linkedin } from 'lucide-react';
import { Telescope, BookOpen, Globe } from 'lucide-react';
import Card from './CardGrid';
import Stars from './Stars';
const HeroSection = () => {
  // Generate stars as small dots
  

  const cardData = [
    {
      icon: Telescope,
      title: "Observe",
      image: "/cool3.png",
      description: "Night sky tracking and telescope sessions",
    },
    {
      icon: BookOpen,
      title: "Research",
      image: "/cool1.png",
      description: "Collaborative astronomical research projects",
    },
    {
      icon: Globe,
      title: "Educate",
      image: "/cool2.png",
      description: "Public workshops and stargazing events",
    },
  ];

  return (
    <div className=" bg-black pt-24 pb-16 px-4 overflow-hidden">
     <Stars/>

      <div className="relative z-10 container mx-auto px-4 flex flex-col justify-center items-center min-h-screen text-center">
        {/* Large Centered Title */}
        <h1 className="text-[10vw] font-bold uppercase tracking-widest text-blue-200 mt-24 mb-12 text-center w-full">
          ASTRONOMY BU
        </h1>

        {/* What We Do Section */}
        <div className="max-w-6xl rounded-xl p-8 mb-12">
          <h2 className="text-4xl font-semibold mb-6 text-blue-300 text-center">
            Exploring the Cosmos, One Star at a Time
          </h2>
          <p className="text-xl leading-relaxed mb-24 text-white text-center">
            We are more than just a club -we are a community of passionate stargazers,
            aspiring astronomers, and cosmic explorers. From telescope observations
            to deep space research, we bring the universe closer to you.
          </p>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {cardData.map((card, index) => (
                <Card
                  key={index}
                  icon={card.icon}
                  title={card.title}
                  image={card.image}
                  description={card.description}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6 mb-8">
          {[
            { Icon: Instagram, url: 'https://www.instagram.com/astronomy_bu/', color: 'text-pink-500' },
            { Icon: Linkedin, url: 'https://www.linkedin.com/company/astronomy-club-bennett-university/', color: 'text-blue-600' },
          ].map(({ Icon, url, color }) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`transform transition-all duration-300 hover:scale-125 ${color}`}
            >
              <Icon size={36} />
            </a>
          ))}
        </div>

        {/* Special Credits Section */}
        <div className="mt-12 bg-blue-900/30 p-6 rounded-xl max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold text-blue-200 mb-4">Website Crafted By</h3>
          <div className="flex flex-col items-center">
            <img
              src="/vaibhavkothari.JPG"
              alt="Developer"
              className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-300"
            />
            <h4 className="text-2xl font-semibold text-white mb-2">Vaibhav Kothari</h4>
            <p className="text-blue-100 mb-2">Full Stack Developer & Astronomy Enthusiast</p>
            <div className="flex space-x-4">
              <a
                href="https://vaibhavkothari.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-white transition-colors"
              >
                Portfolio
              </a>
              <a
                href="https://github.com/vaibhavkothari33"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-white transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
