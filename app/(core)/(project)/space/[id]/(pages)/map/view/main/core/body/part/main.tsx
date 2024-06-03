import { GlassAreaContainer } from '@/(components)/(glass)/area/main';

import { MapLinks } from './links/main';
import { MapPartIdeas } from './ideas/main';

export function MapPart() {
  return (
    <GlassAreaContainer
      name={MapPart.name}
      sizeFx='flex-grow h-full'
      className={`$flex`}
    >
      <MapLinks />
      <MapPartIdeas />
    </GlassAreaContainer>
  );
}
