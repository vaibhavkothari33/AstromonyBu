import TeamMemberCard from './TeamMemberCard';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Stars from '../HeroSection/Stars';

const TeamSection = () => {
  // Generate stars as small dots
  

  return (
    <div className="relative min-h-screen bg-black pt-24 pb-16 px-4 overflow-hidden">
      {/* Star dots container */}
      <Stars/>
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
        image: "",
        description: "Ensuring smooth operations and documentation",
        socials: {
          github: "https://github.com/marksmith",
          linkedin: "https://linkedin.com/in/marksmith",
        },
      },
    ],
  },
  // PR team
  {
    designation: "Public Relation & Outreach Team",
    members: [
      {
        name: "Shubhangi Sarkar",
        designation: "PR & Outreach Head",
        image: "https://i.ibb.co/6Rx5g5XH/Screenshot-2025-01-30-170327.png", 
        description: "Zoo Wee Mama",
        socials: {
          linkedin: "https://www.linkedin.com/in/shubhangi-sarkar-aba206276/",
          instagram: "https://www.instagram.com/_aloo.posto",
        },
      },
      {
        name: "Aniket Kumar ",
        designation: "PR & Outreach Member",
        image: "https://i.ibb.co/RG9TxkJs/Screenshot-2025-01-30-170840.png", 
        description: "Communication skills so goated ppl call me communiket.",
        socials: {
          instagram: "https://www.instagram.com/anikett._.k",
        },
      },
      {
        name: "Parv Gurung",
        designation: "PR & Outreach Member",
        image: "./black.png", 
        description: "Trailblazing through this life",
        socials: {
          instagram: "https://www.instagram.com/gurungparv",
          linkedin:"https://www.linkedin.com/in/parv-gurung-3a477b30a",
        },
      },
    
    ],
  },
  //  content team
  {
    designation: "Content Team",
    members: [
      {
        name: "Yash Motiani",
        designation: "Content Head",
        image: "https://i.ibb.co/RTkPrN9w/Screenshot-2025-01-30-173932.png", 
        description: "I like my planet the same way I like my cereal: with no aliens on it.",
        socials: {
          linkedin: "https://www.linkedin.com/in/yash-motiani070/",
          instagram: "https://www.instagram.com/yashonlyme7",
          x:"https://x.com/Yashonlyme7",
        },
      },

      {
        name: "Manasvi Srivastava ",
        designation: "Content Member",
        image: "https://i.ibb.co/cnfW0yL/Screenshot-2025-01-30-181530.png", 
        description: "Living life to the fullest:)",
        socials: {
          instagram: "https://www.instagram.com/manasvii.x",
        },
      },

    ],
  },
  // social media
  {
    designation: "Social Team",
    members: [
      {
        name: "Kartik Gupta",
        designation: "Social Media Head",
        image: "https://i.ibb.co/qLvXv7Fp/Screenshot-2025-01-30-171135.png", 
        description: "Stars await for each of us.",
        socials: {
          linkedin: "https://www.linkedin.com/in/kartik-gupta-038473322",
          instagram: "https://www.instagram.com/_kart1k_/",
        },
      },

      {
        name: "Aditya Sharma",
        designation: "Social Media Member",
        image: "https://i.ibb.co/jvntmjtS/Screenshot-2025-01-30-174434.png", 
        description: "Curiosity tracks some important questions.",
        socials: {
          instagram: "https://www.instagram.com/anikett._.k",
        },
      },
    
    ],
  },
  // multimedia
  {
    designation: "Multi-Media Team",
    members: [
      {
        name: "Shardul Dhekane (𝙎𝙋𝙄𝙍𝙄𝙏)",
        designation: "Multi-Media Head",
        image: "https://i.ibb.co/xSgH7NMd/Screenshot-2025-01-30-175539.png", 
        description: "Live Laugh Love",
        socials: {
          linkedin: "www.linkedin.com/in/shardul-dhekane",
          instagram: "www.instagram.com/probably_its_spirit",
          x:"https://x.com/ProbablyIts_Me"
        },
      },

      {
        name: "Awush Swami",
        designation: "Multi-Media Member",
        image: "/ayush.JPG",
        description: "Focusing on clicking photos",
        socials: {
          github: "https://github.com/janedoe",
          linkedin: "https://linkedin.com/in/janedoe",
        },
      },

      {
        name: "Aditya Sharma",
        designation: "Multi-Media Member",
        image: "https://i.ibb.co/mCqWBXpw/Screenshot-2025-01-30-180924.png", 
        description: "To infinity and beyond.",
        socials: {
          instagram: "https://www.instagram.com/abhi_ncd/",
          linkedin:"https://www.linkedin.com/in/abhimanyu-narang-768758326/",
        },
      },
    
    ],
  },
  // finance core
  {
    designation: "Finance Team",
    members: [
      {
        name: "Anannyo Roy",
        designation: "Finance Core Member",
        image: "https://i.ibb.co/Csn4PBVL/Screenshot-2025-01-30-181217.png", 
        description: "🗣️🔥",
        socials: {
          linkedin: "https://www.linkedin.com/in/anannyo-roy/",
          instagram: "https://www.instagram.com/help_pls_idk",
          x:"https://x.com/ProbablyIts_Me"
        },
      },

      {
        name: "Awush Swami",
        designation: "Multi-Media Member",
        image: "/ayush.JPG",
        description: "Focusing on clicking photos",
        socials: {
          github: "https://github.com/janedoe",
          linkedin: "https://linkedin.com/in/janedoe",
        },
      },

      {
        name: "Aditya Sharma",
        designation: "Multi-Media Member",
        image: "https://i.ibb.co/mCqWBXpw/Screenshot-2025-01-30-180924.png", 
        description: "To infinity and beyond.",
        socials: {
          instagram: "https://www.instagram.com/abhi_ncd/",
          linkedin:"https://www.linkedin.com/in/abhimanyu-narang-768758326/",
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
