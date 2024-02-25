import { useContext } from 'react';
import { DraftContext } from '../../../../../page';
import { VisualLeft } from './left/main';
import { VisualCenter } from './center/main';
import { VisualRight } from './right/main';

export function DraftHeaderVisual() {
  const draftContext = useContext(DraftContext);

  return (
    <>
      <VisualLeft />
      <VisualCenter />
      <VisualRight />
    </>
  );
}
