import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { glassFx, roundedFx } from '@/style/data';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import {
  ContextForSpacesChannel,
  SpacesChannelSidebarContentMode,
} from '../../../controller/main';

export function SpacesChannelSidebarHeader() {
  const spacesConversationController = useContext(ContextForSpacesChannel);

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
                SpacesChannelSidebarContentMode.CHAPTERS,
              )
            }
          >
            <p
              className={ctwn('font-bold text-slate-400', {
                'text-slate-300':
                  spacesConversationController.state.sidebarContentMode ===
                  SpacesChannelSidebarContentMode.CHAPTERS,
              })}
            >
              Chapters
            </p>
          </GlassWindowContents>
          {spacesConversationController.state.sidebarContentMode ===
            SpacesChannelSidebarContentMode.CHAPTERS && (
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
                SpacesChannelSidebarContentMode.MEMBERS,
              )
            }
          >
            <p
              className={ctwn('font-bold text-slate-400', {
                'text-slate-300':
                  spacesConversationController.state.sidebarContentMode ===
                  SpacesChannelSidebarContentMode.MEMBERS,
              })}
            >
              Members
            </p>
          </GlassWindowContents>
          {spacesConversationController.state.sidebarContentMode ===
            SpacesChannelSidebarContentMode.MEMBERS && (
            <GlassWindowPane glassFx={glassFx['glass-10']} />
          )}
        </GlassWindowFrame>
      </div>
    </div>
  );
}
