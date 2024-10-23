import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/model/space/chapter/main';
import { useControllerForHoverable } from '@/logic/contexts/hoverable/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import { SpacesConversationChapterActive } from './active/main';

export function SpacesConversationSidebarChapter() {
  const chapter = useContext(ContextForSpaceChapterObj);
  const chapterListController = useContext(ContextForSpaceChapterList);
  const active =
    chapterListController.actions.stateActions.checkActive(chapter);

  const hoverableController = useControllerForHoverable();

  return (
    <div
      className='w-full cursor-pointer'
      onMouseOver={() => hoverableController.onHover()}
      onMouseOut={() => hoverableController.onUnhover()}
    >
      {active ? (
        <GlassWindowFrame
          className='aspect-16/9 w-full flex-shrink-0 cursor-pointer'
          roundedFx={roundedFx.rounded}
          borderFx={borderFx['border-around']}
        >
          <GlassWindowContents className='flex w-full flex-col space-y-[1rem] p-[1rem]'>
            <SpacesConversationChapterActive />
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        </GlassWindowFrame>
      ) : (
        <GlassWindowFrame
          borderFx={borderFx['border-b']}
          roundedFx={roundedFx['rounded-t']}
          className='p-[1rem]'
        >
          <GlassWindowContents
            className='w-full cursor-pointer'
            onClick={() =>
              chapterListController.actions.stateActions.select(chapter)
            }
          >
            <p className={ctwn('text-lg font-bold text-slate-400')}>
              {chapter.title?.trim() || 'Untitled'}
            </p>
          </GlassWindowContents>
          {hoverableController.hovered && (
            <GlassWindowPane glassFx={glassFx['glass-10']} />
          )}
        </GlassWindowFrame>
      )}
    </div>
  );
}
