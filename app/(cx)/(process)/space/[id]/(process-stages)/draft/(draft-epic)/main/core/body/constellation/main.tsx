import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { containerFx } from '@/(design)/(fx)/data';
import { DraftLinks } from './links/main';
import { DraftConstellationStars } from './stars/main';

export function DraftConstellation() {
  return (
    <GlassAreaContainer
      name={DraftConstellation.name}
      sizeFx='flex-grow h-full'
      className={`${containerFx['row']}`}
    >
      <DraftLinks />
      <DraftConstellationStars />
    </GlassAreaContainer>
  );
}
