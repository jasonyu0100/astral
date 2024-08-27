import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { SpaceSessionMain } from './main/main';
import { SpaceSessionSidebar } from './sidebar/main';

export function SpaceSessionShareView() {
  return (
    <GlassAreaContainer
      name={SpaceSessionShareView.name}
      sizeFx='h-full flex-grow'
      className={`flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container-sm']}
    >
      <SpaceSessionMain />
      <SpaceSessionSidebar />
    </GlassAreaContainer>
  );
}
