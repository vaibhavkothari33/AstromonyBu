import PropTypes from 'prop-types'; 

const CardGrid = ({ icon: Icon, title, image, description }) => {
  return (
    <div className="bg-blue-950 p-6 sm:p-8 rounded-lg flex flex-col items-center transform transition-all duration-300 hover:scale-105 w-full h-[450px] mx-auto">
      <Icon size={60} className="text-blue-300 mb-6" />
      <div className="w-full h-64 sm:h-96 mb-6 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-2xl sm:text-3xl font-bold text-blue-300 mb-4">{title}</h3>
      <p className="text-white text-base sm:text-lg text-center">{description}</p>
    </div>
  );
};
CardGrid.propTypes = {
    icon: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };
  
  CardGrid.propTypes = {
    cardData: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.elementType.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
  
  export default CardGrid;