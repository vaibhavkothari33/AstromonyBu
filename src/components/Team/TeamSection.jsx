import TeamMemberCard from './TeamMemberCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TeamSection = () => {
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
    <div className="relative min-h-screen bg-black pt-24 pb-16 px-4 overflow-hidden">
      {/* Star dots container */}
      <div className="fixed inset-0 overflow-hidden">
        {generateStarDots(250)}
      </div>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Our Team</h2>

        {/* Map through each team section */}
        {teamMembers.map((section) => (
          <div key={section.designation} className="mb-16">
            <h3 className="text-2xl font-semibold text-purple-400 mb-8 text-center">
              {section.designation}
            </h3>
            <Slider {...sliderSettings}>
              {section.members.map((member) => (
                <div key={member.name} className="p-4">
                  <TeamMemberCard {...member} />
                </div>
              ))}
            </Slider>
          </div>
        ))}
      </div>
    </div>
  );
};

// Sample team data, you'll need to import or define this in your component
const teamMembers = [
  {
    designation: "Board Members",
    members: [
      {
        name: "Shivansh Tanwar",
        designation: "Secretary",
        image: "/shivans.JPG",
        description: "Astrophysics enthusiast with a passion for deep space exploration",
        socials: {
          github: "https://github.com/johndoe",
          linkedin: "https://linkedin.com/in/johndoe",
          instagram: "https://instagram.com/johndoe",
          x: "https://x.com/vaibhavkotharii",
        },
      },
      {
        name: "Shreya Singh ",
        designation: "Advisor",
        image: "/shreya.JPG",
        description: "Focusing on outreach and member engagement",
        socials: {
          github: "https://github.com/janedoe",
          linkedin: "https://linkedin.com/in/janedoe",
        },
      },
      {
        name: "Aeshni",
        designation: "Joint Secretary",
        image: "/ashini.JPG",
        description: "Ensuring smooth operations and documentation",
        socials: {
          github: "https://github.com/marksmith",
          linkedin: "https://linkedin.com/in/marksmith",
        },
      },
    ],
  },
  {
    designation: "Technical Team",
    members: [
      {
        name: "Vaibhav Kothari",
        designation: "Tech-Managment Co-head",
        image: "/vaibhavkothari.JPG",
        description: "Fullstack developer with a passion for deep space exploration",
        socials: {
          github: "https://github.com/johndoe",
          linkedin: "https://linkedin.com/in/johndoe",
          instagram: "https://instagram.com/johndoe",
          x: "https://x.com/vaibhavkotharii",
        },
      },
      {
        name: "Photographer",
        designation: "photographer",
        image: "/ayush.JPG",
        description: "Focusing on clicking photos",
        socials: {
          github: "https://github.com/janedoe",
          linkedin: "https://linkedin.com/in/janedoe",
        },
      },
      {
        name: "Om gupta",
        designation: "Tech-Managment Head",
        image: "https://avatars.githubusercontent.com/u/129139486?s=400",
        description: "Ensuring smooth operations and documentation",
        socials: {
          github: "https://github.com/marksmith",
          linkedin: "https://linkedin.com/in/marksmith",
        },
      },
    ],
  },
];

const sliderSettings = {
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default TeamSection;
