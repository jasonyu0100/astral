import { glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesConversation,
  SpacesConversationSidebarContentMode,
} from '../../../controller/main';

export function SpacesConversationSidebarHeader() {
  const spacesConversationController = useContext(ContextForSpacesConversation);

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
                SpacesConversationSidebarContentMode.CHAPTERS,
              )
            }
          >
            <p
              className={ctwn('font-bold text-slate-500', {
                'text-slate-300':
                  spacesConversationController.state.sidebarContentMode ===
                  SpacesConversationSidebarContentMode.CHAPTERS,
              })}
            >
              Chapters
            </p>
          </GlassWindowContents>
          {spacesConversationController.state.sidebarContentMode ===
            SpacesConversationSidebarContentMode.CHAPTERS && (
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
                SpacesConversationSidebarContentMode.MEMBERS,
              )
            }
          >
            <p
              className={ctwn('font-bold text-slate-500', {
                'text-slate-300':
                  spacesConversationController.state.sidebarContentMode ===
                  SpacesConversationSidebarContentMode.MEMBERS,
              })}
            >
              Members
            </p>
          </GlassWindowContents>
          {spacesConversationController.state.sidebarContentMode ===
            SpacesConversationSidebarContentMode.MEMBERS && (
            <GlassWindowPane glassFx={glassFx['glass-10']} />
          )}
        </GlassWindowFrame>
      </div>
    </div>
  );
}
