import { VisualLeft } from './left/main';
import { VisualCenter } from './center/main';
import { VisualRight } from './right/main';

export function MapHeaderVisual() {
  return (
    <>
      <VisualLeft />
      <VisualCenter />
      <VisualRight />
    </>
  );
}
