import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { SpaceProgressMain } from './main/main';
import { SpaceProgressSidebar } from './sidebar/main';

export function SpaceProgressView() {
  return (
    <GlassAreaContainer
      name={SpaceProgressView.name}
      sizeFx='h-full flex-grow'
      className={`flex`}
      glassFx={glassFx['glass-5']}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container-sm']}
    >
      <SpaceProgressMain />
      <SpaceProgressSidebar />
    </GlassAreaContainer>
  );
}
