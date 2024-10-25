import { ExplorerProjectsSidebarOption } from '@/(core)/(dashboard)/explorer/projects/view/sidebar/(common)/list/option/main';
import { GlassWindowContents } from '@/components/glass/window/contents/main';
import { GlassWindowFrame } from '@/components/glass/window/main';
import { GlassWindowPane } from '@/components/glass/window/pane/main';
import { ContextForSpaceChapterList } from '@/server/controller/space/chapter/list';
import { ContextForSpaceChapterObj } from '@/server/model/space/chapter/main';
import { borderFx, glassFx, roundedFx } from '@/style/data';
import { ctwn } from '@/utils/cn';
import { useContext } from 'react';

export function SpacesBoardSidebarChaptersChapter() {
  const chapterListController = useContext(ContextForSpaceChapterList);
  const chapterObj = useContext(ContextForSpaceChapterObj);
  const selected = chapterListController.state.objId === chapterObj.id;

  return (
    <div
      className='w-full cursor-pointer'
      onClick={() =>
        chapterListController.actions.stateActions.select(chapterObj)
      }
    >
      {selected ? (
        <GlassWindowFrame
          name={ExplorerProjectsSidebarOption.name}
          borderFx={borderFx['border-all']}
          roundedFx={roundedFx['rounded']}
          className='p-[1rem]'
        >
          <GlassWindowContents className='flex flex-col space-y-[0.5rem]'>
            <p className={' text-xl font-bold text-slate-300'}>
              {chapterObj.title}
            </p>
            <p className={'text-sm font-light text-slate-300'}>
              <span className='font-bold'>Objective: </span>
              {chapterObj.objective}
            </p>
            <p className={'text-sm font-light text-slate-300'}>
              <span className='font-bold'>Summary: </span>
              {chapterObj.description}
            </p>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-20']} />
        </GlassWindowFrame>
      ) : (
        <GlassWindowFrame
          name={ExplorerProjectsSidebarOption.name}
          borderFx={borderFx['border-around']}
          roundedFx={roundedFx['rounded']}
          className='p-[1rem]'
        >
          <GlassWindowContents>
            <p className={ctwn('text-lg font-bold text-slate-300')}>
              {chapterObj.title}
            </p>
            <p className={'text-sm font-light text-slate-300'}>
              <span className='font-bold'>Objective: </span>
              {chapterObj.objective}
            </p>
          </GlassWindowContents>
          <GlassWindowPane glassFx={glassFx['glass-5']} />
        </GlassWindowFrame>
      )}
    </div>
  );
}
