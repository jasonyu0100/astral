import {
  ContextForSpacesIdeas,
  SpacesIdeasSidebarContentMode,
  SpacesIdeasSidebarVisibility,
} from '@/(core)/(project)/spaces/[id]/(pages)/ideas/controller/main';
import { AstralChatIndicatorIcon } from '@/icons/chat/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';

export function SpacesIdeasChat() {
  const spacesSpaceController = useContext(ContextForSpacesIdeas);

  return (
    <div
      className={ctwn(
        'absolute bottom-[2rem] left-[2rem] z-30 flex h-[4rem] w-[4rem] flex-col items-center justify-center rounded-full bg-emerald-500',
        {
          'bg-slate-400':
            spacesSpaceController.state.sidebarContentMode !==
            SpacesIdeasSidebarContentMode.CHAT_SCENE,
        },
      )}
    >
      <AstralChatIndicatorIcon
        className={ctwn(
          'h-[2rem] w-[2rem] animate-pulse-slow cursor-pointer fill-slate-300',
        )}
        onClick={() => {
          spacesSpaceController.actions.updateSidebarVisibility(
            SpacesIdeasSidebarVisibility.OPEN,
          );
          if (
            spacesSpaceController.state.sidebarContentMode ===
            SpacesIdeasSidebarContentMode.CHAT_SCENE
          ) {
            spacesSpaceController.actions.updateSidebarContentMode(
              SpacesIdeasSidebarContentMode.CHAPTERS,
            );
          } else {
            spacesSpaceController.actions.updateSidebarContentMode(
              SpacesIdeasSidebarContentMode.CHAT_SCENE,
            );
          }
        }}
      />
    </div>
  );
}
