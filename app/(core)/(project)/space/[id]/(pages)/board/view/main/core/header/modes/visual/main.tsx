import { VisualLeft } from './left/main';
import { VisualCenter } from './center/main';
import { VisualRight } from './right/main';

export function BoardHeaderVisual() {
  return (
    <>
      <VisualLeft />
      <VisualCenter />
      <VisualRight />
    </>
  );
}
