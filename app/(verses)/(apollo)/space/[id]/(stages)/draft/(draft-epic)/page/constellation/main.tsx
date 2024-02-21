import { Glass } from '@/(common)/layer/main';
import { containerStyles } from '@/(common)/styles/data';
import { DraftLinks } from './links/main';
import { DraftConstellationStars } from './stars/main';

export function DraftConstellation() {
  return (
    <Glass
      displayName={DraftConstellation.name}
      sizeStyle='flex-grow h-full'
      className={`${containerStyles['row']}`}
    >
      <DraftLinks />
      <DraftConstellationStars />
    </Glass>
  );
}
