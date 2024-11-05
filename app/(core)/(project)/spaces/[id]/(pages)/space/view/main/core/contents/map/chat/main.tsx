import { AstralChatIndicatorIcon } from '@/icons/chat/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpaceSpace,
  SpaceSpaceSidebarContentMode,
} from '../../../../../../controller/main';

export function SpaceSpaceChat() {
  const {
    state: { sidebarContentMode },
    actions: { updateSidebarContentMode },
  } = useContext(ContextForSpaceSpace);

  return (
    <div
      className={ctwn(
        'absolute bottom-[2rem] left-[2rem] z-30 flex h-[4rem] w-[4rem] flex-col items-center justify-center rounded-full bg-emerald-500',
        {
          'bg-slate-500':
            sidebarContentMode !== SpaceSpaceSidebarContentMode.CHAT_SCENE,
        },
      )}
    >
      <AstralChatIndicatorIcon
        className={ctwn(
          'h-[2rem] w-[2rem] animate-pulse-slow cursor-pointer fill-slate-400',
          {
            'fill-slate-300':
              sidebarContentMode === SpaceSpaceSidebarContentMode.CHAT_SCENE,
          },
        )}
        onClick={() => {
          if (sidebarContentMode === SpaceSpaceSidebarContentMode.CHAT_SCENE) {
            updateSidebarContentMode(SpaceSpaceSidebarContentMode.CHAPTERS);
          } else {
            updateSidebarContentMode(SpaceSpaceSidebarContentMode.CHAT_SCENE);
          }
        }}
      />
    </div>
  );
}
