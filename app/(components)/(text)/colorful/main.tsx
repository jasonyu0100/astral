import React from 'react';
import seedrandom from 'seedrandom';

interface ColorfulTextProps {
  children?: string;
  seed?: string;
}

export function ColorfulText({ children, seed }: ColorfulTextProps) {
  const colors = [
    'text-red-500',
    'text-green-500',
    'text-blue-500',
    'text-yellow-500',
    'text-purple-500',
    'text-pink-500',
    'text-indigo-500',
    'text-gray-500',
    'text-red-400',
    'text-green-400',
    'text-blue-400',
    'text-yellow-400',
    'text-purple-400',
    'text-pink-400',
    'text-indigo-400',
    'text-gray-400',
  ];

  const rng = seedrandom(seed); // Create a seeded random number generator

  const getRandomColor = (): string => {
    return colors[Math.floor(rng() * colors.length)];
  };

  return (
    <p className='font-magazine text-3xl text-black'>
      {Array.from(children || '').map((char, index) => (
        <span key={index} className={getRandomColor()}>
          {char}
        </span>
      ))}
    </p>
  );
}