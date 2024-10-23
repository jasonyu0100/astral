import { GlassAreaContainer } from '@/ui/glass/area/main';
import { SpacesConversationContents } from './contents/main';
import { SpacesConversationHeader } from './header/main';

export function SpacesConversationCore() {
  return (
    <div className='w-full' style={{ height: '100%' }}>
      <GlassAreaContainer
        name={SpacesConversationCore.name}
        sizeFx='w-full h-full'
        className={`flex flex-col items-center`}
      >
        <SpacesConversationHeader />
        <SpacesConversationContents />
      </GlassAreaContainer>
    </div>
  );
}
