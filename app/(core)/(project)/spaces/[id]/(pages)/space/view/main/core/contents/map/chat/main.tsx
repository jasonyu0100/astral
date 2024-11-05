import { AstralChatIndicatorIcon } from '@/icons/chat/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesSpace,
  SpacesSpaceSidebarContentMode,
} from '../../../../../../controller/main';

export function SpacesSpaceChat() {
  const {
    state: { sidebarContentMode },
    actions: { updateSidebarContentMode },
  } = useContext(ContextForSpacesSpace);

  return (
    <div
      className={ctwn(
        'absolute bottom-[2rem] left-[2rem] z-30 flex h-[4rem] w-[4rem] flex-col items-center justify-center rounded-full bg-emerald-500',
        {
          'bg-slate-500':
            sidebarContentMode !== SpacesSpaceSidebarContentMode.CHAT_SCENE,
        },
      )}
    >
      <AstralChatIndicatorIcon
        className={ctwn(
          'h-[2rem] w-[2rem] animate-pulse-slow cursor-pointer fill-slate-400',
          {
            'fill-slate-300':
              sidebarContentMode === SpacesSpaceSidebarContentMode.CHAT_SCENE,
          },
        )}
        onClick={() => {
          if (sidebarContentMode === SpacesSpaceSidebarContentMode.CHAT_SCENE) {
            updateSidebarContentMode(SpacesSpaceSidebarContentMode.CHAPTERS);
          } else {
            updateSidebarContentMode(SpacesSpaceSidebarContentMode.CHAT_SCENE);
          }
        }}
      />
    </div>
  );
}
