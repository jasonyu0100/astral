import { GlassAreaContainer } from '@/(components)/(basic)/glass/area/main';
import { containerStyles } from '@/(design)/(styles)/data';
import { DraftLinks } from './links/main';
import { DraftConstellationStars } from './stars/main';

export function DraftConstellation() {
  return (
    <GlassAreaContainer
      name={DraftConstellation.name}
      size='flex-grow h-full'
      className={`${containerStyles['row']}`}
    >
      <DraftLinks />
      <DraftConstellationStars />
    </GlassAreaContainer>
  );
}
