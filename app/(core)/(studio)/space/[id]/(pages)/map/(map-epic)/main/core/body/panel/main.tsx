import { GlassAreaContainer } from '@/(components)/(glass)/area/main';
import { borderFx, glassFx } from '@/(style)/data';
import { MapConstellationList } from './list/main';

export function MapPanel() {
  return (
    <GlassAreaContainer
      name={MapPanel.name}
      sizeFx='w-[240px] h-full'
      className='flex flex-col'
      borderFx={borderFx['border-r']}
    >
      <MapConstellationList />
    </GlassAreaContainer>
  );
}
