import { GlassAreaContainer } from '@/ui/(glass)/area/main';
import { SpaceIdeaChat } from './chat/main';
import { SpaceIdeaHeader } from './header/main';

export function SpaceIdeaCore() {
  return (
    <div className='w-full' style={{ height: '100%' }}>
      <GlassAreaContainer
        name={SpaceIdeaCore.name}
        sizeFx='w-full h-full'
        className={`flex flex-col items-center`}
      >
        <SpaceIdeaHeader />
        <SpaceIdeaChat />
      </GlassAreaContainer>
    </div>
  );
}
