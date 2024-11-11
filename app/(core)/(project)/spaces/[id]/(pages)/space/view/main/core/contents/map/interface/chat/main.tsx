import {
  ContextForSpacesSpace,
  SpacesSpaceSidebarContentMode,
  SpacesSpaceSidebarVisibility,
} from '@/(core)/(project)/spaces/[id]/(pages)/space/controller/main';
import { AstralChatIndicatorIcon } from '@/icons/chat/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';

export function SpacesSpaceChat() {
  const spacesSpaceController = useContext(ContextForSpacesSpace);

  return (
    <div
      className={ctwn(
        'absolute bottom-[2rem] left-[2rem] z-30 flex h-[4rem] w-[4rem] flex-col items-center justify-center rounded-full bg-emerald-500',
        {
          'bg-slate-400':
            spacesSpaceController.state.sidebarContentMode !==
            SpacesSpaceSidebarContentMode.CHAT_SCENE,
        },
      )}
    >
      <AstralChatIndicatorIcon
        className={ctwn(
          'h-[2rem] w-[2rem] animate-pulse-slow cursor-pointer fill-slate-300',
        )}
        onClick={() => {
          spacesSpaceController.actions.updateSidebarVisibility(
            SpacesSpaceSidebarVisibility.OPEN,
          );
          if (
            spacesSpaceController.state.sidebarContentMode ===
            SpacesSpaceSidebarContentMode.CHAT_SCENE
          ) {
            spacesSpaceController.actions.updateSidebarContentMode(
              SpacesSpaceSidebarContentMode.CHAPTERS,
            );
          } else {
            spacesSpaceController.actions.updateSidebarContentMode(
              SpacesSpaceSidebarContentMode.CHAT_SCENE,
            );
          }
        }}
      />
    </div>
  );
}
