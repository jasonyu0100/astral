import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { containerFx } from '@/(style)/data';
import { MapLinks } from './links/main';
import { MapPartIdeas } from './ideas/main';

export function MapPart() {
  return (
    <GlassAreaContainer
      name={MapPart.name}
      sizeFx='flex-grow h-full'
      className={`${containerFx['row']}`}
    >
      <MapLinks />
      <MapPartIdeas />
    </GlassAreaContainer>
  );
}
