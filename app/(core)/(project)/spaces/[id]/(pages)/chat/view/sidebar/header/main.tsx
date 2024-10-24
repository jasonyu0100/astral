import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { glassFx, roundedFx } from '@/style/data';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesChat,
  SpacesChatSidebarContentMode,
} from '../../../controller/main';

export function SpacesChatSidebarHeader() {
  const spacesConversationController = useContext(ContextForSpacesChat);

  return (
    <div className='grid h-[4rem] w-full flex-shrink-0 grid-cols-2 p-[1rem] py-[0.5rem] shadow-glow'>
      <div>
        <GlassWindowFrame
          className='h-full flex-shrink-0'
          roundedFx={roundedFx['rounded-full']}
        >
          <GlassWindowContents
            className='flex cursor-pointer items-center justify-center'
            onClick={() =>
              spacesConversationController.actions.updateSidebarContentMode(
                SpacesChatSidebarContentMode.CHAPTERS,
              )
            }
          >
            <p
              className={ctwn('font-bold text-slate-500', {
                'text-slate-300':
                  spacesConversationController.state.sidebarContentMode ===
                  SpacesChatSidebarContentMode.CHAPTERS,
              })}
            >
              Chapters
            </p>
          </GlassWindowContents>
          {spacesConversationController.state.sidebarContentMode ===
            SpacesChatSidebarContentMode.CHAPTERS && (
            <GlassWindowPane glassFx={glassFx['glass-10']} />
          )}
        </GlassWindowFrame>
      </div>
      <div>
        <GlassWindowFrame
          className='h-full flex-shrink-0'
          roundedFx={roundedFx['rounded-full']}
        >
          <GlassWindowContents
            className='flex cursor-pointer items-center justify-center'
            onClick={() =>
              spacesConversationController.actions.updateSidebarContentMode(
                SpacesChatSidebarContentMode.MEMBERS,
              )
            }
          >
            <p
              className={ctwn('font-bold text-slate-500', {
                'text-slate-300':
                  spacesConversationController.state.sidebarContentMode ===
                  SpacesChatSidebarContentMode.MEMBERS,
              })}
            >
              Members
            </p>
          </GlassWindowContents>
          {spacesConversationController.state.sidebarContentMode ===
            SpacesChatSidebarContentMode.MEMBERS && (
            <GlassWindowPane glassFx={glassFx['glass-10']} />
          )}
        </GlassWindowFrame>
      </div>
    </div>
  );
}
