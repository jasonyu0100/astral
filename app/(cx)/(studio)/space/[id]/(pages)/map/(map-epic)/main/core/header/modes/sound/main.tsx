import { useContext } from 'react';
import { SoundLeft } from './left/main';
import { SoundCenter } from './center/main';
import { SoundRight } from './right/main';

export function MapHeaderSound() {
  return (
    <>
      <SoundLeft />
      <SoundCenter />
      <SoundRight />
    </>
  );
}
