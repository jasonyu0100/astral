import { AstralChatIndicatorIcon } from '@/icons/chat/main';
import { cn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpaceMap,
  SpaceMapSidebarContentMode,
} from '../../../../../../controller/main';

export function SpaceMapChat() {
  const {
    state: { sidebarContentMode },
    actions: { updateSidebarContentMode },
  } = useContext(ContextForSpaceMap);

  return (
    <div className='absolute bottom-[1rem] right-[1rem] z-50 flex h-[4rem] w-[4rem] flex-col items-center justify-center'>
      <AstralChatIndicatorIcon
        className={cn(
          'h-[2rem] w-[2rem] animate-pulse-slow cursor-pointer fill-slate-500',
          {
            'fill-slate-300':
              sidebarContentMode === SpaceMapSidebarContentMode.CHAT,
          },
        )}
        onClick={() => {
          if (sidebarContentMode === SpaceMapSidebarContentMode.CHAT) {
            updateSidebarContentMode(SpaceMapSidebarContentMode.LIST);
          } else {
            updateSidebarContentMode(SpaceMapSidebarContentMode.CHAT);
          }
        }}
      />
    </div>
  );
}
