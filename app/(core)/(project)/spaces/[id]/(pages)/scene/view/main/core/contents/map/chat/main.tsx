import { AstralChatIndicatorIcon } from '@/icons/chat/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesScene,
  SpacesSceneSidebarContentMode,
} from '../../../../../../controller/main';

export function SpacesSceneChat() {
  const {
    state: { sidebarContentMode },
    actions: { updateSidebarContentMode },
  } = useContext(ContextForSpacesScene);

  return (
    <div
      className={ctwn(
        'absolute bottom-[2rem] right-[2rem] z-30 flex h-[4rem] w-[4rem] flex-col items-center justify-center rounded-full',
        {
          'bg-slate-500':
            sidebarContentMode === SpacesSceneSidebarContentMode.CHAT_SCENE,
        },
      )}
    >
      <AstralChatIndicatorIcon
        className={ctwn(
          'h-[2rem] w-[2rem] animate-pulse-slow cursor-pointer fill-slate-400',
          {
            'fill-slate-300':
              sidebarContentMode === SpacesSceneSidebarContentMode.CHAT_SCENE,
          },
        )}
        onClick={() => {
          if (sidebarContentMode === SpacesSceneSidebarContentMode.CHAT_SCENE) {
            updateSidebarContentMode(SpacesSceneSidebarContentMode.CHAPTERS);
          } else {
            updateSidebarContentMode(SpacesSceneSidebarContentMode.CHAT_SCENE);
          }
        }}
      />
    </div>
  );
}
