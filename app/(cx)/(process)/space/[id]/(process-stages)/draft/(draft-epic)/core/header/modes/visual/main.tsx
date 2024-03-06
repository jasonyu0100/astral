import { VisualLeft } from './left/main';
import { VisualCenter } from './center/main';
import { VisualRight } from './right/main';

export function DraftHeaderVisual() {
  return (
    <>
      <VisualLeft />
      <VisualCenter />
      <VisualRight />
    </>
  );
}
