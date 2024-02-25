import { useContext } from 'react';
import { DraftContext } from '../../../../../page';
import { InfoLeft } from './left/main';
import { InfoCenter } from './center/main';
import { InfoRight } from './right/main';

export function DraftHeaderInfo() {
  const draftContext = useContext(DraftContext);

  return (
    <>
      <InfoLeft />
      <InfoCenter />
      <InfoRight />
    </>
  );
}
