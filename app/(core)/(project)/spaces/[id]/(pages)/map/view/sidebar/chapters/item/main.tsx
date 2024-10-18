import { ExplorerProjectsSidebarOption } from '@/(core)/(dashboard)/explorer/(pages)/projects/view/sidebar/(common)/list/option/main';
import { ContextForSpaceChapterList } from '@/(server)/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/(server)/model/space/chapter/main';
import { useControllerForHoverable } from '@/logic/contexts/hoverable/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { GlassWindowContents } from '@/ui/glass/window/contents/main';
import { GlassWindowFrame } from '@/ui/glass/window/main';
import { GlassWindowPane } from '@/ui/glass/window/pane/main';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';
import { active } from 'sortablejs';

export function SpacesMapSidebarChaptersChapter() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const chapterObj = useContext(ContextForSpaceChapterObj);
  const hoverableController = useControllerForHoverable();

  return (
    <div
      className='w-full cursor-pointer'
      onMouseOver={() => hoverableController.onHover()}
      onMouseOut={() => hoverableController.onUnhover()}
      onClick={() =>
        chapterListController.actions.stateActions.select(chapterObj)
      }
    >
      <GlassWindowFrame
        name={ExplorerProjectsSidebarOption.name}
        borderFx={borderFx['border-b']}
        roundedFx={roundedFx['rounded-t']}
        className=' p-[1rem]'
      >
        <GlassWindowContents>
          <p
            className={ctwn('text-lg font-bold text-slate-500', {
              'text-slate-300': hoverableController.hovered || active,
            })}
          >
            {chapterObj.title}
          </p>
        </GlassWindowContents>
        {(hoverableController.hovered || active) && (
          <GlassWindowPane glassFx={glassFx['glass-10']} />
        )}
      </GlassWindowFrame>
    </div>
  );
}
