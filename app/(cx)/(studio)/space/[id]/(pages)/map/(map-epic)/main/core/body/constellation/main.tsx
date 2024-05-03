import { GlassAreaContainer } from '@/(lib)/(glass)/area/main';
import { containerFx } from '@/(fx)/data';
import { MapLinks } from './links/main';
import { MapConstellationStars } from './stars/main';

export function MapConstellation() {
  return (
    <GlassAreaContainer
      name={MapConstellation.name}
      sizeFx='flex-grow h-full'
      className={`${containerFx['row']}`}
    >
      <MapLinks />
      <MapConstellationStars />
    </GlassAreaContainer>
  );
}
