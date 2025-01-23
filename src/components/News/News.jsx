import { useEffect, useState } from 'react';
import axios from 'axios';
import conf from '../../conf/conf';
const News = () => {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const NASA_API_KEY = conf.nasaApi;
  const APOD_URL = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&count=9`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(APOD_URL);

        // Ensure the response is an array
        const apodData = response.data.map((item) => ({
          title: item.title || 'Astronomy Picture of the Day',
          description: item.explanation,
          imageUrl: item.url,
          link: item.hdurl || item.url,
        }));

        setFacts(apodData);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to fetch data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [APOD_URL]);

  if (loading) return <div className="text-white text-center mt-16">Loading...</div>;
  if (error) return <div className="text-red-500 text-center mt-16">{error}</div>;
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
    <div className="relative min-h-screen bg-black text-white pt-24 pb-16 px-4 overflow-hidden">
      <h2 className="text-4xl font-bold text-center text-white mb-16">Astronomy Facts & News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facts.map((fact, index) => (
          <div key={index} className="rounded-lg bg-gray-800 p-4">
            <img
              src={fact.imageUrl}
              alt={fact.title}
              className="w-full h-80 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-bold">{fact.title}</h3>
            <p className="text-sm mt-2 text-gray-400">
              {fact.description.slice(0, 250)}...
            </p>
            <a
              href={fact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-purple-400 hover:underline"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default News;
