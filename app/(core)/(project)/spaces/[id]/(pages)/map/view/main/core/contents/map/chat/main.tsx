import { AstralChatIndicatorIcon } from '@/icons/chat/main';
import { cn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesMap,
  SpacesMapSidebarContentMode,
} from '../../../../../../controller/main';

export function SpacesMapChat() {
  const {
    state: { sidebarContentMode },
    actions: { updateSidebarContentMode },
  } = useContext(ContextForSpacesMap);

  return (
    <div className='absolute bottom-[2rem] left-[2rem] z-50 flex h-[4rem] w-[4rem] flex-col items-center justify-center'>
      <AstralChatIndicatorIcon
        className={cn(
          'h-[2rem] w-[2rem] animate-pulse-slow cursor-pointer fill-slate-500',
          {
            'fill-slate-300':
              sidebarContentMode === SpacesMapSidebarContentMode.CHAT,
          },
        )}
        onClick={() => {
          if (sidebarContentMode === SpacesMapSidebarContentMode.CHAT) {
            updateSidebarContentMode(SpacesMapSidebarContentMode.LIST);
          } else {
            updateSidebarContentMode(SpacesMapSidebarContentMode.CHAT);
          }
        }}
      />
    </div>
  );
}
