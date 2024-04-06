import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { containerFx } from '@/(design)/(fx)/data';
import { MapCore } from './core/main';
import { MapChapters } from './chapters/main';

export function MapMain() {
  return (
    <GlassAreaContainer
      name={MapMain.name}
      sizeFx='h-full flex-grow'
      className={`${containerFx['col']}`}
    >
      <MapCore />
      <MapChapters />
    </GlassAreaContainer>
  );
}
