import { useContext } from 'react';
import { DraftContext } from '../../../../../page';
import { SoundLeft } from './left/main';
import { SoundCenter } from './center/main';
import { SoundRight } from './right/main';

export function DraftHeaderSound() {
  const draftContext = useContext(DraftContext);

  return (
    <>
      <SoundLeft />
      <SoundCenter />
      <SoundRight />
    </>
  );
}
