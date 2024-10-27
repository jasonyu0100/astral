import { AstralChatIndicatorIcon } from '@/icons/chat/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesView,
  SpacesViewSidebarContentMode,
} from '../../../../../../controller/main';

export function SpacesViewChat() {
  const {
    state: { sidebarContentMode },
    actions: { updateSidebarContentMode },
  } = useContext(ContextForSpacesView);

  return (
    <div className='absolute bottom-[2rem] right-[2rem] z-30 flex h-[4rem] w-[4rem] flex-col items-center justify-center'>
      <AstralChatIndicatorIcon
        className={ctwn(
          'h-[2rem] w-[2rem] animate-pulse-slow cursor-pointer fill-slate-500',
          {
            'fill-slate-300':
              sidebarContentMode === SpacesViewSidebarContentMode.CHAT_SCENE,
          },
        )}
        onClick={() => {
          if (sidebarContentMode === SpacesViewSidebarContentMode.CHAT_SCENE) {
            updateSidebarContentMode(SpacesViewSidebarContentMode.CHAPTERS);
          } else {
            updateSidebarContentMode(SpacesViewSidebarContentMode.CHAT_SCENE);
          }
        }}
      />
    </div>
  );
}
