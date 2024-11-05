import { GlassAreaContainer } from '@/components/glass/area/main';
import { SpacesChannelCore } from './core/main';
import { SpacesChannelInput } from './interface/main';

export function SpacesChannelMain() {
  return (
    <GlassAreaContainer
      name={SpacesChannelMain.name}
      sizeFx='flex-grow h-full'
      className={`flex flex-col`}
    >
      <SpacesChannelCore />
      <SpacesChannelInput />
    </GlassAreaContainer>
  );
}
