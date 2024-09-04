import { GlassAreaContainer } from '@/ui/glass/area/main';
import { SpaceChatContents } from './contents/main';
import { SpaceChatHeader } from './header/main';

export function SpaceChatCore() {
  return (
    <div className='w-full' style={{ height: '100%' }}>
      <GlassAreaContainer
        name={SpaceChatCore.name}
        sizeFx='w-full h-full'
        className={`flex flex-col items-center`}
      >
        <SpaceChatHeader />
        <SpaceChatContents />
      </GlassAreaContainer>
    </div>
  );
}
