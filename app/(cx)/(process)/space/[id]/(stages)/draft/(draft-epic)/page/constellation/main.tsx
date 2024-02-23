import { Glass } from '@/(components)/layer/main';
import { containerStyles } from '@/(components)/styles/data';
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
