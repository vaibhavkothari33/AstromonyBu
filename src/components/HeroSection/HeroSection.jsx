import { Instagram, Linkedin } from 'lucide-react';
import { Telescope, BookOpen, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import Card from './CardGrid';
import Stars from './Stars';

const HeroSection = () => {
  const cardData = [
    { icon: Telescope, title: 'Observe', image: '/cool3.png', description: 'Night sky tracking and telescope sessions' },
    { icon: BookOpen, title: 'Research', image: '/cool1.png', description: 'Collaborative astronomical research projects' },
    { icon: Globe, title: 'Educate', image: '/cool2.png', description: 'Public workshops and stargazing events' },
  ];

  return (
    <div className="relative bg-black pt-24 pb-16 px-4 overflow-hidden">
      <Stars />
      <div className="relative z-10 container mx-auto px-4 flex flex-col justify-center items-center min-h-screen text-center">
        {/* Animated Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[10vw] font-bold uppercase tracking-widest bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent mt-24 mb-12"
        >
          ASTRONOMY BU
        </motion.h1>

        {/* What We Do Section */}
        <div className="max-w-6xl rounded-xl p-8 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-4xl font-semibold mb-6 text-blue-300"
          >
            Exploring the Cosmos, One Star at a Time
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="text-xl leading-relaxed mb-24 text-white"
          >
            We are more than just a club - we are a community of passionate stargazers, aspiring astronomers, and cosmic explorers. From telescope observations to deep space research, we bring the universe closer to you.
          </motion.p>

          {/* Card Grid */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
          >
            {cardData.map((card, index) => (
              <Card key={index} icon={card.icon} title={card.title} image={card.image} description={card.description} />
            ))}
          </motion.div>
        </div>

        {/* Social Media Links */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8 }}
          className="flex space-x-6 mb-8"
        >
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
        </motion.div>

        {/* Credits Section */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="mt-12 bg-blue-900/30 p-6 rounded-xl max-w-2xl mx-auto"
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;