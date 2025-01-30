import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import conf from '../../conf/conf';
import Stars from '../HeroSection/Stars';

// Create axios instance with default config
const api = axios.create({
  baseURL: 'https://api.nasa.gov/planetary',
  params: {
    api_key: conf.nasaApi
  }
});

// Separate data fetching logic
const fetchApodData = async () => {
  const { data } = await api.get('/apod', { params: { count: 15 } });
  return data.map((item) => ({
    title: item.title || 'Astronomy Picture of the Day',
    description: item.explanation,
    imageUrl: item.url,
    link: item.hdurl || item.url,
  }));
};

const FactCard = React.memo(({ fact }) => (
  <div className="rounded-lg overflow-hidden shadow-lg" style={{ backgroundColor: '#1f2937' }}>
    <div className="relative">
      <img
        src={fact.imageUrl}
        alt={fact.title}
        className="w-full h-80 object-cover"
        loading="lazy"
      />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#1f2937] to-transparent" />
    </div>
    <div className="p-6 bg-[#1f2937]">
      <h3 className="text-xl font-bold mb-3 text-white">{fact.title}</h3>
      <p className="text-gray-300 leading-relaxed">
        {fact.description.slice(0, 250)}...
      </p>
     
    </div>
  </div>
));

// Add display name
FactCard.displayName = 'FactCard';

// Add prop types
FactCard.propTypes = {
  fact: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  }).isRequired
};

const LoadingSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[...Array(6)].map((_, i) => (
      <div key={i} className="rounded-lg overflow-hidden shadow-lg" style={{ backgroundColor: '#1f2937' }}>
        <div className="w-full h-80 bg-gray-700 animate-pulse" />
        <div className="p-6">
          <div className="h-7 bg-gray-700 rounded w-3/4 mb-4 animate-pulse" />
          <div className="h-4 bg-gray-700 rounded w-full mb-2 animate-pulse" />
          <div className="h-4 bg-gray-700 rounded w-full mb-2 animate-pulse" />
          <div className="h-4 bg-gray-700 rounded w-2/3 animate-pulse" />
        </div>
      </div>
    ))}
  </div>
);

const News = () => {
  const { data: facts, isLoading, error } = useQuery({
    queryKey: ['apodData'],
    queryFn: fetchApodData,
    staleTime: 5 * 60 * 1000,
    cacheTime: 30 * 60 * 1000,
    retry: 2,
    refetchOnWindowFocus: false,
  });

  const factsGrid = useMemo(() => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {facts?.map((fact, index) => (
        <FactCard key={index} fact={fact} />
      ))}
    </div>
  ), [facts]);

  if (error) {
    return (
      <div className="min-h-screen bg-black pt-24 pb-16 px-4">
        <div style={{ backgroundColor: '#7f1d1d' }} className="border border-red-500 rounded-lg p-4">
          <p className="text-red-500 text-center">Failed to fetch data. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-black pt-24 pb-16 px-4 overflow-hidden">
      <Stars />
      <h2 className="text-4xl font-bold text-center text-white mb-16">
        Astronomy Facts & News
      </h2>
      {isLoading ? <LoadingSkeleton /> : factsGrid}
    </div>
  );
};

export default News;