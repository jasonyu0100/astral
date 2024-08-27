'use client';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassAreaContainer } from '@/ui/glass/area/main';
import { SpaceIdeaMain } from './main/main';
import { SpaceIdeaSidebar } from './sidebar/main';

export function SpaceIdeaView() {
  return (
    <GlassAreaContainer
      name={SpaceIdeaView.name}
      sizeFx='h-full flex-grow'
      glassFx={glassFx['glass-5']}
      className={`flex`}
      borderFx={borderFx['border-around']}
      roundedFx={roundedFx['rounded-container-sm']}
    >
      <SpaceIdeaSidebar />
      <SpaceIdeaMain />
    </GlassAreaContainer>
  );
}
